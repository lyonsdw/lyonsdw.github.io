(* ****************************************************************************
mathematica code to calculate orbit dimension, other properties of state vector
 for n-qubit quantum state
 6/2006
   David W. Lyons lyons@lvc.edu
 run mathematica with 
   % math 
       or 
   % mathematica
 then load this file with
   In[1]:= << qcomp.m
     or
   In[1]:= Get["qcomp.m"]
 run math in emacs shell buffer for convenient keyboard control
**************************************************************************** *)

(* standard basis vectors for C^2 *)
     (* ec2[[1]] is |0>, ec2[[2]] is |1> *)
ec2={{1,0},{0,1}};

(* standard basis vectors for (C^2)^(tensor n) *)
ec2n[multiindex_]:=
Module[{i,n=Length[multiindex],result},
       result=ec2[[multiindex[[1]]+1]];
       For[i=2,i<=n,i++,
	   result=vectortensor[result,ec2[[multiindex[[i]]+1]]]
       ];
       result
];

(* standard basis vectors for gl(2^n,C) *)
     (* egl2n[[I,J]] is |I><J| *)
egl2n[Imult_,Jmult_]:=OuterProduct[ec2n[Imult],ec2n[Jmult]];

(* Outer product *)
OuterProduct[vector1_,vector2_] :=
Module[{i,N=Length[vector1]},
       Transpose[{vector1}].{Table[Conjugate[vector2[[i]]],{i,1,N}]}
];

(* 
(* [A_k,rho] *)
Arho[k_,rho_] := 
Module[{i,j,n=Log[2,Length[rho[[1]]]]},
       Table[cvect2rvect[rho[[i+1,j+1]]*
];
	     *)		   


(* enter state vectors in format 2*ee[{0,1,0,1}] + (1+I)*ee[{1,1,0,1}] , etc *)
numberqubits[multiindex_] := Length[multiindex];

(* convert multiindex {0,1,1,0,0,1} to the integer it represents base 2 *)
index2int[multiindex_] := FromDigits[multiindex,2];

(* convert multiindex {0,1,1,2,0,3} to the integer it represents base 4 *)
index42int[multiindex_] := FromDigits[multiindex,4];

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

(* inverse of index42int *)
int42index[i_,n_] := Module[{j,index={},whittle=i},
	 For[j=n-1,j>=0,index=Join[{Mod[whittle,4]},index];
	     whittle=Quotient[whittle,4];
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

(* sort the list of integers 0<= i < 2^n by how many 1s in binary string *)
SortByOnes[n_] :=
Module[{i,j,indexvect},
       indexvect=Table[int2index[i,n],{i,0,2^n-1}];
       indexvect=Table[Prepend[indexvect[[i+1]],Sum[indexvect[[i+1,j]],{j,n}]],{i,0,2^n-1}];
       indexvect=Sort[indexvect];
       indexvect=Table[Delete[indexvect[[i+1]],1],{i,0,2^n-1}];
       indexvect
];

(* number of 1s in multiindex to the left of position i *)
SumOfOnes[multiindex_,i_] :=
Module[{j,n=Length[multiindex]},
       Sum[multiindex[[j]],{j,i}]
];

(* construct n-qubit multiindex from multiindices from subsystems A,B *)
     (* subsystemindex has length n, 1s specify which qubits are subsystem A,
      so 0s specify subsystem B 
      example:
      In[1] := CompositeIndex[{1,1,0,0,1},{a1,a2,a3},{b1,b2}]
      Out[1] := {a1, a2, b1, b2, a3}
      subsystem A is specified by the first argument
      to consist of qubits 1,2,5, so B is qubits 3,4;
      the second argument is the index for A, the third for 5;
      in practice a1,a2,...,b2 are 0s and 1s
      *)
CompositeIndex[subsystemindex_,Aindex_,Bindex_] :=
Module[{i,n=Length[subsystemindex]},
       Table[If[subsystemindex[[i]]==1,
		Aindex[[SumOfOnes[subsystemindex,i]]],
		Bindex[[i-SumOfOnes[subsystemindex,i]]]
	     ],
	   {i,n}]
];
     
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

Abasis := {{I,0},{0,-I}};
Bbasis := {{0,1},{-1,0}};
Cbasis := {{0,I},{I,0}};
id2 := {{1,0},{0,1}};
sigmax := {{0,1},{1,0}};
sigmay := {{0,-I},{I,0}};
sigmaz := {{1,0},{0,-1}};
sigma := {(1/2)*id2,(1/2)*sigmax,(1/2)*sigmay,(1/2)*sigmaz};

(* Lie bracket of matrices *)
Bracket[A_,B_] := A.B - B.A;

(* tensor of two vectors and Kronecker product of matrices *)
<<LinearAlgebra`MatrixManipulation`;

KroneckerProduct[a_,b_] := BlockMatrix[Outer[Times,a,b]];

vectortensor[a_,b_] := KroneckerProduct[{a},{b}][[1]];

     (*
<<LinearAlgebra`MatrixManipulation`;
MatrixDirectProduct[a_List?MatrixQ, b_List?MatrixQ] :=BlockMatrix[Outer[Times, a, b]];
      *)


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

(* this is slow 6/6/2006 *)
TwoColReport[statevector_]:=
Module[{i,n=numqubits[statevector],indexvector},
indexvector=SortByOnes[n];				    
Print["state vector ",statevector,"\n"];
(* Print["matrix M ",MatrixForm[M[statevector]],"\n"]; *)
Print["triple set \t span number without L \t span number with L"];
  For[i=1,i<2^n,i++,
      (* old unsorted print *)
      (*    Print[int2index[i,n],"\t\t",SpanNumber[int2index[2i,n+1],statevector],"\t\t\t",SpanNumber[int2index[2i+1,n+1],statevector],"\n"];*)
      (* sorted print *)
Print[indexvector[[i+1]],"\t\t",
      SpanNumber[Append[indexvector[[i+1]],0],statevector],
      "\t\t\t",
      SpanNumber[Append[indexvector[[i+1]],1],statevector]
 ]
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

(* density matrix for statevector *)
DensityMatrix[statevector_] :=
Module[{i,N=Length[statevector]},
       Transpose[{statevector}].{Table[Conjugate[statevector[[i]]],{i,1,N}]}
];

(* Pauli vector constructor *)
     (* i,j are n-qubit multiindices *)
pc := {{1,0,0,1},{0,1,I,0},{0,1,-I,0},{1,0,0,-1}};     
PauliVector[i_,j_] :=
Module[{k,paulivect,n=Length[i]},
       paulivect=pc[[index2int[{i[[1]],j[[1]]}]+1]];
       For[k=2,k<=n,k++,
	   paulivect=vectortensor[paulivect,pc[[index2int[{i[[k]],j[[k]]}]+1]]];
       ];
       paulivect
];

(* convert pauli basis vector p_multiindex4 to standard coords *)
sc := {{1/2,0,0,1/2},{0,1/2,1/2,0},{0,-I/2,I/2,0},{1/2,0,0,-1/2}};
paulivect2standardvect[multiindex4_] :=
Module[{k,standardvect,n=Length[multiindex4]},
       standardvect=sc[[multiindex4[[1]]+1]];
       For[k=2,k<=n,k++,
	   standardvect=vectortensor[standardvect,sc[[multiindex4[[k]]+1]]];
       ];
       standardvect
];
     
(* Pauli coefficient finder *)
     (* rho is density matrix *)
PauliCoeff[rho_]:=
Module[{i,j,n=Log[2,Length[rho[[1]]]]},
       Sum[rho[[i+1,j+1]]*PauliVector[int2index[i,n],int2index[j,n]],{i,0,2^n-1},{j,0,2^n-1}]
       ];

(* inverse of PauliCoeff, converts pauli coeff vector to density matrix *)
     (* paulivect is density matrix in Pauli coordinates *)
StandardCoeff[paulivect_]:=
Module[{i,j,n=Log[4,Length[paulivect]]},
       Sum[paulivect[[i]]*paulivect2standardvect[int42index[i-1,n]],{i,4^n}]
       ];

(* partial trace of a density matrix for a subsystem specified by subsystemindex *)
     (* input is statevector *)
PartialTracePurestate[statevector_,subsystemindex_] :=
Module[{i,j,k,n=numqubits[statevector],
	m=SumOfOnes[subsystemindex,Length[subsystemindex]],
	rho=DensityMatrix[statevector]},
       Table[Sum[rho[[index2int[CompositeIndex[subsystemindex,
				     int2index[i,m],
				     int2index[j,n-m]]]+1,
		      index2int[CompositeIndex[subsystemindex,
				     int2index[k,m],
				     int2index[j,n-m]]]+1
		      ]],
	   {j,0,2^(n-m)-1}],
	   {i,0,2^m-1},{k,0,2^m-1}
	     ]
];

(* partial trace of a density matrix for a subsystem specified by subsystemindex *)
     (* input is density matrix *)
PartialTrace[rho_,subsystemindex_] :=
Module[{i,j,k,n=Log[2,Length[rho[[1]]]],
	m=SumOfOnes[subsystemindex,Length[subsystemindex]]},
       Table[Sum[rho[[index2int[CompositeIndex[subsystemindex,
				     int2index[i,m],
				     int2index[j,n-m]]]+1,
		      index2int[CompositeIndex[subsystemindex,
				     int2index[k,m],
				     int2index[j,n-m]]]+1
		      ]],
	   {j,0,2^(n-m)-1}],
	   {i,0,2^m-1},{k,0,2^m-1}
	     ]
];



(* collection of states *)
     (* watch out!! do not leave line breaks in state sums *)
teststate = I*ee[{0,1}] + (1+I)*ee[{1,0}];
singlet = ee[{0,0}] + ee[{1,1}];
normsinglet = (1/Sqrt[2])*(ee[{0,0}] + ee[{1,1}]);
fivechoosetwo = ee[{0,0,0,1,1}] + ee[{0,0,1,0,1}] + ee[{0,1,0,0,1}] + ee[{1,0,0,0,1}] + ee[{0,0,1,1,0}] + ee[{0,1,0,1,0}] + ee[{1,0,0,1,0}] + ee[{0,1,1,0,0}] + ee[{1,0,1,0,0}] + ee[{1,1,0,0,0}];
GHZ = ees["000"] + ees["111"];
ghz = ee[{0,0,0}] + ee[{1,1,1}];
generic2= (a+b*I)*ees["00"] + (c+d*I)*ees["01"] + (e+f*I)*ees["10"] + (g+h*I)*ees["11"];
fivechoose2 = ees["11000"] + ees["10100"] + ees["10010"] + ees["10001"] + ees["01100"] + ees["01010"] + ees["01001"] + ees["00110"] + ees["00101"] + ees["00011"]  ;
generic4 = rvect2cvect[{a,b,c,d,e,f,g,h,m,n,p,q,r,s,t,u,A,B,C,D,E,F,G,H,M,N,P,Q,R,S,T,U}];
fourcat=ees["0000"]+ees["1111"];
fivecat=ees["00000"]+ees["11111"];
ncat[n_]:=Module[{i},Table[If[i==1 || i==2^n,1,0],{i,1,2^n}]];

(* kernel integrality test states *)
three123 = (1+I)ees["000"]+(2+3I)ees["111"]

m1={{1,0,0,1},{0,1,1,0},{0,I,-I,0},{1,0,0,-1}};
m2={{1/2,0,0,1/2},{0,1/2,-I/2,0},{0,1/2,I/2,0},{1/2,0,0,-1/2}};

(* bobs example 6/16/2006 *)
L={{I,0,0,-1},{0,I,0,0},{0,0,I,0},{1,0,0,I}};
rho=DensityMatrix[{1,0,1,0}];
