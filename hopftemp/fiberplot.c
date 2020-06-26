/*********************************************************************
		      Hopf Fiber plotting routine

This program prompts the user for a number of fibers to plot, NUMFIBERS.
Next the user is prompted for the (projective) coordinates of NUMFIBERS
points on the 2 sphere.  Commands to make a plots of these fibers are
written to output files.  

To compile: gcc fiberplot.c -o fiberplot -lm

**********************************************************************/

#include <stdio.h>
#include <math.h>

#define GPLOTFILE "gplotfile"	/* gnuplotoutput file name */
#define MPLOTFILE "mplotfile"	/* maple output file name */
#define COORDFILE "coordfile"	/* coordinate output file name */

#define POINTCT 500		/* points plotted per fiber */

FILE *gfp;			/* gnuplot output file pointer */
FILE *mfp;			/* maple output file pointer */
FILE *cfp;			/* coordinate file pointer */

int main(int argc, char *argv[]){
  int NUMFIBERS;		/* number of fibers to plot */
  int i;			/* loop index */
  int j;			/* point plotting index */
  float a,b,c;			/* basepoint coords */
  float A,B,C;			/* fiber circle parameters */
  float x,y,z;			/* fiber circle coords */
  double norm;			/* norm of <a,b,c> */
  float t;			/* parameter for circles */
  float denom, sine, cosine;	/* auxilliary stuff */

  if ((gfp=fopen(GPLOTFILE, "w"))==NULL){
    printf("Can't open output file.\n");
    exit(1);
   }

  if ((mfp=fopen(MPLOTFILE, "w"))==NULL){
    printf("Can't open output file.\n");
    exit(1);
   }

  if ((cfp=fopen(COORDFILE, "w"))==NULL){
    printf("Can't open output file.\n");
    exit(1);
   }

  fprintf(mfp,"# maple commands to plot hopf fibers\n\n");
  fprintf(mfp,"# invoke with \n");
  fprintf(mfp,"# > read(mplotfile);\n\n");
  fprintf(mfp,"s:='s':\n\n");

  fprintf(cfp,"# fiber x,y,z coordinates\n");
  fprintf(cfp,"# %d points per fiber\n\n",POINTCT);

  fprintf(gfp,"# gnuplot commands to plot hopf fibers\n\n");
  fprintf(gfp,"# invoke with\n");
  fprintf(gfp,"# gnuplot> load \"gplotfile\"\n\n");
  fprintf(gfp,"# dummy variable for parametric curve in 3 space is u\n\n");
  fprintf(gfp,"set parametric\n\n");
  fprintf(gfp,"splot [-pi to pi] ");
  
  printf("\n Input number of fibers to plot: ");
  scanf("%d", &NUMFIBERS);
			
  for(i=1; i<=NUMFIBERS; i++){	/* base point input loop */
    printf("\n Basepoint %d first coordinate: ", i);
    scanf("%f", &a);
    printf("\n Basepoint %d second coordinate: ", i);
    scanf("%f", &b);
    printf("\n Basepoint %d third coordinate: ", i);
    scanf("%f", &c);

    norm=sqrt(a*a + b*b + c*c);	/* normalize basepoint choice */
    a=a/norm;
    b=b/norm;
    c=c/norm;

    if(a==-1){
      fprintf(mfp,"c%d:=[0,cos(s),sin(s)]:\n",i);
      if(i<=3){
	fprintf(gfp,"0,cos(u),sin(u)");
      }
      fprintf(cfp,"\n# fiber number %d\n",i);
      fprintf(cfp,"# basepoint is %f,%f,%f\n\n",a,b,c);
      for (j=1;j<=POINTCT;j++){
	t=j*2*PI/POINTCT;
	x=0;
	y=cos(t);
	z=sin(t);
	fprintf(cfp,"%f\t%f\t%f\n",x,y,z);
      }
    }
    else if(a==1){
      fprintf(mfp,"c%d:=[s,0,0]:\n",i);
      if(i<=3){
	fprintf(gfp,"u,0,0");
      }
      fprintf(cfp,"\n# fiber number %d\n",i);
      fprintf(cfp,"# basepoint is %f,%f,%f\n\n",a,b,c);
      for (j=1;j<=POINTCT;j++){
	t=(j*1.0)/POINTCT;
	x=PI*(1-2*t);
	y=0;
	z=0;
	fprintf(cfp,"%f\t%f\t%f\n",x,y,z);
      }
    }
    else {
          A=(.5)*sqrt(2+2*a);
          B=-c/sqrt(2+2*a);
          C=b/sqrt(2+2*a);
    
      fprintf(mfp,"c%d:=[%f*sin(s)/(1-%f*cos(s)),((%f)*cos(s)+(%f)*sin(s))/(1-%f*cos(s)),((%f)*cos(s)-(%f)*sin(s))/(1-%f*cos(s))]:\n",i,A,A,B,C,A,C,B,A);

      fprintf(cfp,"\n# fiber number %d\n",i);
      fprintf(cfp,"# basepoint is %f,%f,%f\n\n",a,b,c);
      for (j=1;j<=POINTCT;j++){
	t=j*2*PI/POINTCT;
	sine=sin(t);
	cosine=cos(t);
	denom=1-A*cosine;
	x=A*sine/denom;
	y=(B*cosine+C*sine)/denom;
	z=(C*cosine-B*sine)/denom;
	fprintf(cfp,"%f\t%f\t%f\n",x,y,z);
      }
      if(i<=3){
	fprintf(gfp,"%f*sin(u)/(1-%f*cos(u)),((%f)*cos(u)+(%f)*sin(u))/(1-%f*cos(u)),((%f)*cos(u)-(%f)*sin(u))/(1-%f*cos(u))",A,A,B,C,A,C,B,A);
      }
    }
    if(i<3 & NUMFIBERS>=3){
      fprintf(gfp,",");
    }
  }

  fprintf(mfp,"plot3d({");
  for(i=1; i<=NUMFIBERS; i++){
    fprintf(mfp,"c%d",i);
    if(i<NUMFIBERS){
      fprintf(mfp,",");
    }
  }
  fprintf(mfp,"},s=-Pi..Pi,t=0..1,grid=[500,2],axes=FRAME);");

  fclose(mfp);
  fclose(gfp);
  fclose(cfp);

  return 0;
}

/*****************************************************************
				 Notes
To plot a plain text file of coordinates of points in 3-space with
gnuplot,  use these commands.

gnuplot > set parametric
gnuplot > splot "filename"

Instructions for how to plot fibers in Maple and gnuplot are given in
the object files mplotfile and gplotfile.  Plain coordinates of fibers,
with commented information on what basepoint they correspond to, are in
the output file coordfile.

*****************************************************************/

