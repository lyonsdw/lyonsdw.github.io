/*********************************************************************
		      Circles on the 2-sphere

This program calculates points on circles on the 2-sphere in 3-space.
The user is prompted for a normal vector to the plane in which the
circle lies and a scalar between 0 and 1 which gives the distance from
the origin to the plane in which the circle lies.  Output is written to
a file.

You can then run fiberplot with the calculated basepoints to plot the Hopf
fibers over these points.

To compile: gcc s2circs.c -o s2circs -lm

**********************************************************************/

#include <stdio.h>
#include <string.h>
#include <math.h>

#define NUMPTS 100		/* number of points to plot per circle */
#define SCIRCFILE "baseptfile"

FILE *fp;			/* output file pointer */

struct quaternion{
  float realpart;
  float ipart;
  float jpart;
  float kpart;
};

struct quaternion qmult(struct quaternion r, struct quaternion s);
struct quaternion qconj(struct quaternion r);
int check(void);

int main(int argc, char *argv[])
{
  float n1,n2,n3;		/* coords of normal to circle */
  float t;			/* dist origin to plane of circle */
  float a, norm, shrink;
  float xtrans,ytrans,ztrans;
  float x,y,z;			/* coords of circ pts */
  struct quaternion r, rstar, base, p;
  int i;

  if ((fp=fopen(SCIRCFILE, "w"))==NULL){
    printf("Can't open output file.\n");
    exit(1);
   }
  
  /* input normal vector */
  printf("Input vector normal to circle.\n");
  printf("  Normal vector first coordinate: ");
  scanf("%f",&n1);
  printf("\n  Normal vector second coordinate: ");
  scanf("%f",&n2);
  printf("\n Normal vector third coordinate: ");
  scanf("%f",&n3);

  /* input distance from origin to circle plane */
  printf("\n\nInput distance from origin to circle plane: ");
  scanf("%f",&t);
  if ((t<0) || (t>=1)){
    printf("\nChoose a distance in the interval [0,1).\n");
    exit(1);
  }

  /* normalize normal vector */
  norm=sqrt(n1*n1 + n2*n2 + n3*n3);
  n1=n1/norm;
  n2=n2/norm;
  n3=n3/norm;
  if (norm==0){
    printf("Choose a nonzero normal vector.\n");
    exit(1);
  }
  /*
  fprintf(fp,"# points in circle intersecting 2-sphere in 3-space\n");
  fprintf(fp,"# normal vector to circle is %f\t%f\t%f\n",n1,n2,n3);
  fprintf(fp,"# distance from origin to plane of circle is %f\n\n",t);
  */
  /* make rotation quaternion */
  a=sqrt(1+n3);
  r.realpart=a/sqrt(2);
  r.ipart=-n2/(sqrt(2)*a);
  r.jpart=n1/(sqrt(2)*a);
  r.kpart=0;
  /* check rot quat 
  printf("rot quat is  %f,%f,%f,%f\n",r.realpart,r.ipart,r.jpart,r.kpart);
  */

  rstar=qconj(r);

  shrink=sqrt(1-t*t);
  xtrans=n1*t;
  ytrans=n2*t;
  ztrans=n3*t;
  
  /* calculate and write circ pts */
  for (i=1; i<=NUMPTS; i++){
    base.realpart=0;
    base.ipart=cos(i*2*PI/NUMPTS);
    base.jpart=sin(i*2*PI/NUMPTS);
    base.kpart=0;

    p=qmult(qmult(r,base),rstar);


    /* check real part zero
    printf("%f\n",p.realpart); */
    x=p.ipart*shrink+xtrans;
    y=p.jpart*shrink+ytrans;
    z=p.kpart*shrink+ztrans;

    fprintf(fp,"%f\t%f\t%f\n",x,y,z);

  }

  /*
  check();
  */
  fclose(fp);

  return 0;
}


/* quaternion muliplication function */
struct quaternion qmult(struct quaternion r, struct quaternion s){
  struct quaternion product;

  product.realpart=r.realpart*s.realpart-r.ipart*s.ipart-r.jpart*s.jpart-r.kpart*s.kpart;
  product.ipart=r.realpart*s.ipart+r.ipart*s.realpart+r.jpart*s.kpart-r.kpart*s.jpart;
  product.jpart=r.realpart*s.jpart-r.ipart*s.kpart+r.jpart*s.realpart+r.kpart*s.ipart;
  product.kpart=r.realpart*s.kpart+r.ipart*s.jpart-r.jpart*s.ipart+r.kpart*s.realpart;
  
  return product;
}

struct quaternion qconj(struct quaternion r){
  struct quaternion conjugate;

  conjugate.realpart=r.realpart;
  conjugate.ipart=-r.ipart;
  conjugate.jpart=-r.jpart;
  conjugate.kpart=-r.kpart;

  return conjugate;
}

/* check calculations */
int check(void){
  struct quaternion p;
  struct quaternion r={2,3,1,4};
  struct quaternion s={6,7,4,5};

  p=qmult(r,s);
  printf("product is %f,%f,%f,%f\n",p.realpart,p.ipart,p.jpart,p.kpart);
  p=qconj(r);
  printf("conj is %f,%f,%f,%f\n",p.realpart,p.ipart,p.jpart,p.kpart);
  return 0;
}
/************************************************************
				 Notes
plot coordinates in output file in gnuplot with gnuplot commands
> set parametric
> splot "baseptfile"

**************************************************************/


