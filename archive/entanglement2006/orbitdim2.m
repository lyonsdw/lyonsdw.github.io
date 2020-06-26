(* ****************************************************************************
mathematica code to calculate orbit dimension, other properties of state vector
 for n-qubit quantum state
 6/6/2006
   David W. Lyons lyons@lvc.edu
 run mathematica with 
   % math 
       or 
   % mathematica
 then load this file with
   In[1]:= << orbitdim.m
     or
   In[1]:= Get["3comp.m"]
 run math in emacs shell buffer for convenient keyboard control
**************************************************************************** *)

(* enter state vectors in format 2*ee[{0,1,0,1}] + (1+I)*ee[{1,1,0,1}] , etc *)
     numberqubits[multiindex_] := Length[multiindex];
     (* convert multiindex {0,1,1,0,0,1} to the integer it represents base 2 *)
     index2int[multiindex_] := FromDigits[multiindex,2];
     (* construct standard basis vector from binary multiindex  *)
     ee[multiindex_] := Module[{i,exp=index2int[multiindex],n=numberqubits[multiindex]},
	  Table[If[i==exp,1,0],{i,0,2^n-1}]]; 

     (* alternative string format for state vectors 2*ees["0101"] + (1+I)ees["1101"], etc *)
     string2vectindex[stringmultiindex_] := Characters[stringmultiindex]/.{"0"->0,"1"->1}
     ees[stringmultiindex_]:= ee[string2vectindex[stringmultiindex]];

(* inverse of index2int *)
     int2index[i_,n_] := Module[{j,index={},whittle=i},
	 For[j=n-1,j>=0,index=Join[{Mod[whittle,2]},index];
	     whittle=Quotient[whittle,2];
	     j--];
         index];

(* calculate kth bit from left of n bit base 2 repn of i, 0<=i<=2^n-1 *)
     (* bit[n,k,i] is same as int2index[i,n][[k]] *)
     bit[n_,k_,i_] := Module[{j,poweroftwo=1},
	 For[j=1,j<=n-k,poweroftwo=2*poweroftwo;j++];
	    Mod[Quotient[i,poweroftwo],2]];
     
(* find integer whose binary string is off by one in kth place from left in n-qubit string for i *)
     (* 1<=i<=2^n *)
     offbyone[n_,k_,i_] := Module[{index=int2index[i,n]},
	     index[[k]] = Mod[index[[k]]+1,2];
             index2int[index]];

(* convert length N complex vector to length 2N real vector *)
cvect2rvect[complexvect_] :=
Module[{i,rvect={},N=Length[complexvect]},
       For[i=1,i<=N,
	   rvect=Join[rvect,{ComplexExpand[Re[complexvect[[i]]]],
			     ComplexExpand[Im[complexvect[[i]]]]}];
	   i++];
       rvect];

rvect2cvect[realvect_] := Table[realvect[[2i-1]]+I*realvect[[2i]],{i,Length[realvect]/2}];

(* su(2) basis matrices *)
     (*
     Abasis := {{I,0},{0,-I}};
     Bbasis := {{0,1},{-1,0}};
     Cbasis := {{0,I},{I,0}};
      *)

(* tensor of two vectors *)
     vectortensor[a_,b_] := Module[{p,alen=Length[a],blen=Length[b],newlen=Length[a]*Length[b]},
	 Table[a[[Quotient[p-1,blen]+1]]*b[[Mod[p-1,blen]+1]], {p,newlen}]];

(* construct columns of M from statevector *)

     numqubits[statevector_] := Log[2,Length[statevector]];

     (* A, B, C and lonely columns, first build as rows *)
Apsi[k_,statevector_] :=
Module[{i,n=numqubits[statevector]},
       cvect2rvect[Table[I*If[bit[n,k,i]==1,-1,1]*statevector[[i+1]],{i,0,2^n-1}]]];

Bpsi[k_,statevector_] :=
Module[{i,n=numqubits[statevector]},
       cvect2rvect[Table[If[bit[n,k,i]==1,-1,1]*statevector[[offbyone[n,k,i]+1]],{i,0,2^n-1}]]];

Cpsi[k_,statevector_] :=
Module[{i,n=numqubits[statevector]},
       cvect2rvect[Table[I*statevector[[offbyone[n,k,i]+1]],{i,0,2^n-1}]]]
       
Lpsi[statevector_] :=
Module[{i,n=numqubits[statevector]},
       cvect2rvect[Table[-I*statevector[[i+1]],{i,0,2^n-1}]]];

(* multiindex picks out which triples are included *)
     (* multiindex has n+1 positions, last is yes/no for lonely column *)
M[multiindex_,statevector_] := 
Module[{k,n=numqubits[statevector],M={}},
       For[k=1,k<=n,
	   If[multiindex[[k]]==1,
	      M=Append[M,Apsi[k,statevector]];
	      M=Append[M,Bpsi[k,statevector]];
	      M=Append[M,Cpsi[k,statevector]]];
	   k++];
       If[multiindex[[n+1]]==1,M=Append[M,Lpsi[statevector]]];
       M=Transpose[M]];

M[statevector_] := Module[{k},M[Table[1,{k,numqubits[statevector]+1}],statevector]];
       

(* orbit dimension of state, span numbers of sets of triples *)

SpanNumber[multiindex_,statevector_] := MatrixRank[M[multiindex,statevector]];
OrbitDim[statevector_] := MatrixRank[M[statevector]] - 1;

FullReport[statevector_] := Module[{i,n=numqubits[statevector]},
Print["state vector ",statevector,"\n"];
Print["matrix M ",MatrixForm[M[statevector]],"\n"];
Print["triple set \t span number \n"];
  For[i=1,i<2^(n+1),i++,
    Print[int2index[i,n+1],"\t",SpanNumber[int2index[i,n+1],statevector],"\n"];
      ]
];

TwoColReport[statevector_]:= Module[{i,n=numqubits[statevector]},
Print["state vector ",statevector,"\n"];
(* Print["matrix M ",MatrixForm[M[statevector]],"\n"]; *)
Print["triple set \t span number without L \t span number with L"];
  For[i=1,i<2^n,i++,
    Print[int2index[i,n],"\t\t",SpanNumber[int2index[2i,n+1],statevector],"\t\t\t",SpanNumber[int2index[2i+1,n+1],statevector],"\n"];
      ]
];

(* output always adds a newline! how to fix this? 6/2006 *)
MPrettyPrint[statevector_] := 
Module[{i,j,k,n=numqubits[statevector],M=M[statevector]},
       Put[statevector,"prettym.txt"];
       For[i=0,i<2^n,i++,
	   Print[int2index[i,n],"   ",M[[2*i+1]]];
	   For[k=1,n,k++,Print[" "]];
	   Print["   ",M[[2*i+2]]];
       ];
       ];


(*
<<LinearAlgebra`MatrixManipulation`;

KroneckerProduct[a_,b_] := BlockMatrix[Outer[Times,a,b]];
 *)
     (*
<<LinearAlgebra`MatrixManipulation`;
MatrixDirectProduct[a_List?MatrixQ, b_List?MatrixQ] :=BlockMatrix[Outer[Times, a, b]];
      *)

(* collection of states *)
     (* watch out!! do not leave line breaks in state sums *)
teststate = I*ee[{0,1}] + (1+I)*ee[{1,0}];
singlet = ee[{0,0}] + ee[{1,1}];
fivechoosetwo = ee[{0,0,0,1,1}] + ee[{0,0,1,0,1}] + ee[{0,1,0,0,1}] + ee[{1,0,0,0,1}] + ee[{0,0,1,1,0}] + ee[{0,1,0,1,0}] + ee[{1,0,0,1,0}] + ee[{0,1,1,0,0}] + ee[{1,0,1,0,0}] + ee[{1,1,0,0,0}];
GHZ = ees["000"] + ees["111"];
ghz = ee[{0,0,0}] + ee[{1,1,1}];
generic2= (a+b*I)*ees["00"] + (c+d*I)*ees["01"] + (e+f*I)*ees["10"] + (g+h*I)*ees["11"];
fivechoose2 = ees["11000"] + ees["10100"] + ees["10010"] + ees["10001"] + ees["01100"] + ees["01010"] + ees["01001"] + ees["00110"] + ees["00101"] + ees["00011"]  ;
generic4 = rvect2cvect[{a,b,c,d,e,f,g,h,m,n,p,q,r,s,t,u,A,B,C,D,E,F,G,H,M,N,P,Q,R,S,T,U}];
fourcat=ees["0000"]+ees["1111"];
fivecat=ees["00000"]+ees["11111"];
ncat[n_]:=Module[{i},Table[If[i==1 || i==2^n,1,0],{i,1,2^n}]];
