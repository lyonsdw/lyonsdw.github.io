/*********************************************************************
		      Hex Board Fig File Generator

To compile: gcc hexbd.c -o hexbd -lm

**********************************************************************/

#include <stdio.h>
#include <math.h>

#define FIGFILE "hexbd.fig"	/* hex board fig file */
#define ROWCT 11		/* row count */
#define RADIUS 400		/* radius of hex cell */
#define X0 50			/* initial cell x offset */
#define Y0 50			/* initial cell y offset */

FILE *fp;			/* fig file pointer */

int main(int argc, char *argv[]){

  int r,w,i,j;
  int Ax,Ay,Bx,By,Cx,Cy,Dx,Dy,Ex,Ey,Fx,Fy;
  
  if ((fp=fopen(FIGFILE, "w"))==NULL){
    printf("Can't open output file.\n");
    exit(1);
   }

  fprintf(fp,"#FIG 3.1\n");
  fprintf(fp,"#Landscape\n");
  fprintf(fp,"Center\n");
  fprintf(fp,"Inches\n");
  fprintf(fp,"1200 2\n");
  
  r=RADIUS;
  w=round(sqrt(3)*r/2);

  for (i=0;i<ROWCT;i++){
    for (j=0;j<ROWCT;j++){
      Ax=X0+i*w+2*j*w;
      Ay=Y0+i*3*r/2;
      Bx=Ax+w;
      By=Ay+r/2;
      Cx=Bx;
      Cy=Ay+3*r/2;
      Dx=Ax;
      Dy=Ay+2*r;
      Ex=Ax-w;
      Ey=Cy;
      Fx=Ex;
      Fy=By;

      fprintf(fp,"2 3 0 1 -1 7 0 0 -1 0.000 0 0 0 0 0 7\n");
      fprintf(fp,"\t%d %d %d %d %d %d %d %d %d %d %d %d\n",Ax,Ay,Bx,By,Cx,Cy,Dx,Dy,Ex,Ey,Fx,Fy);
      fprintf(fp,"\t%d %d\n",Ax,Ay);

    }
  }
  
  fclose(fp);

  return 0;
}
/****************************************************
  round arg to nearest integer
  ****************************************************/
int round(double x)		
{
   int r;

   if ((x-(int)x)>=.5)
      r=((int)x)+1;
   else
      r=(int)x;
   
   return r;
}

/*****************************************************************
				 Notes
A nice 11x11 board for playing with pencils and paper
  rowct 11, radius 300, x_0 and y_0 1500 

An 11x11 board for playing on with go stones
  rowct 11, radius 400, x_0 and y_0 
  then rotate in xfig to fit on page

*****************************************************************/

