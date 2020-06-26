/*********************************************************************
		      Hopf Fiber basepoint calculation

This program calculates points on the 2 sphere in various ways.  The
first is to find those points on S^2 whose (sterographic projections of)
hopf fibers intersect the interior of the unit disk in the y,z plane at
points specified by the user.  There is a choice to enter the
intersection points in the y,z plane individually, or as an entire polar
rectangle.  The program will also calculate a grid of points on a
rectange on S^2 in spherical coordinates.  Output is written to a file.

You can then run fiberplot with the calculated basepoints to plot the
fibers. 

To compile: gcc baseptcalc.c -o baseptcalc -lm

**********************************************************************/

#include <stdio.h>
#include <math.h>

#define BASEPTFILE "baseptfile"	/* output file name */

FILE *fp;			/* output file pointer */

int baseptcalc(float y, float z);
int round(float x);

int main(int argc, char *argv[]){
  int i;			/* loop index */
  int j;			/* point plotting index */
  int choice;
  int NUMFIBERS;		/* number of fibers to plot */
  float r0,r1,theta0,theta1;	/* polar rect boundaries */
  int rgridct, thetagridct;	/* subdivisions of polar rect. grid */
  int phigridct;
  float phi,phi0,phi1;
  float r,theta,y,z;
  float c,s;
  float p1,p2,p3;

  if ((fp=fopen(BASEPTFILE, "w"))==NULL){
    printf("Can't open output file.\n");
    exit(1);
  }
  /*
  fprintf(fp,"# Basepoints for Hopf fibers with given intersections in y,z plane\n");
  fprintf(fp,"# Use this data as input for fiberplot to plot fibers.\n");
  fprintf(fp,"# format is y,z coords then basept coords \n\n");
  */
  printf("Select one of the following.\n\n");
  printf("\n 1.  Choose individual intersection points in y,z plane.\n");
  printf("\n 2.  Give boundaries for polar rectangle.\n");
  printf("\n 3.  Give boundaries for rectangle on S^2.\n");
  scanf("%d", &choice);
  fflush(stdin);

  if (choice==1){

    printf("\n Input number of basepoints to calculate: ");
    scanf("%d", &NUMFIBERS);
			
    for(i=1; i<=NUMFIBERS; i++){	/* base point input loop */
      printf("\n y coordinate, fiber %d: ", i);
      scanf("%f", &y);
      printf("\n z coordinate, fiber %d: ", i);
      scanf("%f", &z);
      baseptcalc(y,z);
    }
  }

  else if (choice==2){
    printf("\n Enter boundaries of polar rectangle.");
    printf("\n   radius, lower boundary: ");
    scanf("%f", &r0);
    printf("\n   radius, upper boundary: ");
    scanf("%f", &r1);
    printf("\n   angle, lower boundary: ");
    scanf("%f", &theta0);
    printf("\n   angle, upper boundary: ");
    scanf("%f", &theta1);
    printf("\n   grid subdivision, radius: ");
    scanf("%d", &rgridct);
    printf("\n   grid subdivisions, angle: ");
    scanf("%d", &thetagridct);

    for (i=0; i<=thetagridct; i++){
      theta=theta0+(theta1-theta0)/thetagridct*i;
      c=cos(theta);
      s=sin(theta);
      for (j=0; j<=rgridct; j++){
	r=r0+(r1-r0)/rgridct*j;
	y=r*c;
	z=r*s;
	/*  fprintf(fp,"#  r, theta=\t%f\t%f\n",r,theta);	*/
	
	baseptcalc(y,z);
      }
    }
  }
  else if (choice==3){
    printf("\n x,y plane angle, lower boundary: ");
    scanf("%f",&theta0);
    printf("\n x,y plane angle, upper boundary: ");
    scanf("%f",&theta1);
    printf("\n angle from z axis, lower boundary: ");
    scanf("%f",&phi0);
    printf("\n angle from z axis, upper boundary: ");
    scanf("%f",&phi1);
    printf("\n grid subdivisions, xy plane angle: ");
    scanf("%d",&thetagridct);
    printf("\n grid subdivisions, angle from z axis: ");
    scanf("%d",&phigridct);

    for (i=0; i<=thetagridct; i++){
      theta=theta0+(theta1-theta0)/thetagridct*i;
      c=cos(theta);
      s=sin(theta);
      for (j=0; j<=phigridct; j++){
	phi=phi0+(phi1-phi0)/phigridct*j;
	p1=sin(phi)*c;
	p2=sin(phi)*s;
	p3=cos(phi);
	fprintf(fp,"%f\t%f\t%f\n",p1,p2,p3);
      }
    }
  }
    fclose(fp);

    return 0;
}

/*****************************************************************
			calculate the basepoint
*****************************************************************/
int baseptcalc(float y, float z){
  float r;			/* norm of y,z vector */
  float denom;
  float a,b,c;			/* real, j,k parts of point in fiber in S^3 */
  float p1,p2,p3;		/* basepoint coordinates */

  r=sqrt(y*y+z*z);
  if (r==0){
    printf("Not the origin, hosehead.  Try again.\n");
    exit(1);
  }

  denom=1+r*r;
  a=(1-r*r)/denom;
  b=-2*y/denom;
  c=-2*z/denom;

  p1=2*a*a-1;
  p2=2*a*c;
  p3=-2*a*b;

  /*  fprintf(fp,"#basepoint for intersection at y,z=\t%f\t%f\n",y,z);*/
  fprintf(fp,"%f\t%f\t%f\n",p1,p2,p3);

  return 0;
}


/*****************************************************************
				 Notes


*****************************************************************/

