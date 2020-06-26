/****************************************************************************
   Secant.java

     This applet demonstrates how a line tangent to a curve is a limit
     of approximating secant lines.  The viewer uses the mouse to move
     the secant line.

     compile with: javac Secant.java
     run with:     appletviewer secant.html
      or open secant.html in a java capable web browser

     Copyright (C) 1999  David W. Lyons
*****************************************************************************/

import java.applet.*;
import java.awt.*;
import java.io.*;

public class Secant extends Applet {

    /* we plot the graph of a function f
       original x,y coordinates are called TRUE coordinates
       transformed window coordinates are WINDOW coordinates
    */

    static double TRUE_LOWER_LEFT_X = -.1;  //x coord, true lower left corner of graph box
    static double TRUE_LOWER_LEFT_Y = -2.0;  //x coord, true lower left corner of graph box
    static double TRUE_UPPER_RIGHT_X = 4.0;  //x coord, upper right corner of graph box
    static double TRUE_UPPER_RIGHT_Y = 100.0; //y coord, upper right corner of graph box

    double TRUE_BASEPOINT[] = new double[2]; // basepoint TRUE coords
    int WINDOW_BASEPT[] = new int[2]; // basepoint WINDOW coord
    
    /* window dimensions
       WINDOW_SIZE[0] is window width
       WINDOW_SIZE[1] is window height
    */
    int WINDOW_SIZE[] = new int[2];

    /* coordinate axes in WINDOW coordinates
       WINDOW_AXIS[0] is WINDOW y coord for x axis
       WINDOW_AXIS[1] is WINDOW x coord for y axis
    */

    int WINDOW_AXIS[] = new int[2];

    /* arrays to hold x and y WINDOW coords for points on curve */
    int curve_x[] = new int[1000]; // x WINDOW coords for curve polyline
    int curve_y[] = new int[1000]; // y WINDOW coords for curve polyline

    int mouse_position[] = new int[2]; // mouse position coords
    
    public void init() {

	// assign basepoint x TRUE coord here
	TRUE_BASEPOINT[0] = 2.7; // basepoint x TRUE coord
	TRUE_BASEPOINT[1] = f(TRUE_BASEPOINT[0]); // basepoint y TRUE coord

        WINDOW_SIZE[0] = size().width; // window width
        WINDOW_SIZE[1] = size().height; // window height

	WINDOW_BASEPT[0] = x_true2window(TRUE_BASEPOINT[0]);
	System.out.println("TRUE_BASEPOINT[0], WINDOW_BASEPT[0] is " + TRUE_BASEPOINT[0]+ " "+ WINDOW_BASEPT[0]);
	WINDOW_BASEPT[1] = y_true2window(TRUE_BASEPOINT[1]);


	WINDOW_AXIS[0] = y_true2window(0); // y WINDOW coord for x axis
	WINDOW_AXIS[1] = x_true2window(0); // x WINDOW coord for y axis

	/* calculate the polyline coords for the curve */
	for (int i=0; i < WINDOW_SIZE[0]; i++){

	    curve_x[i] = i;
	    curve_y[i] = y_true2window(f(x_window2true(i)));
	    //	    System.out.println("curve_y[i] is " + curve_y[i]);
	}
	
	// QUESTION: why does this seem to be ignored?
        this.setBackground(Color.white);
        Graphics g = this.getGraphics();
        g.setColor(Color.black);
	// draw the curve
	g.setColor(Color.blue);
	g.drawPolyline(curve_x, curve_y, WINDOW_SIZE[0]);
    }

    /* affine transformations TRUE <-> WINDOW coords */

    public double x_window2true(int x){
	
	double value = (TRUE_UPPER_RIGHT_X - TRUE_LOWER_LEFT_X)*x/((double) WINDOW_SIZE[0]) + TRUE_LOWER_LEFT_X;
	return value;
    }

    public double y_window2true(int y){

	double value = (TRUE_UPPER_RIGHT_Y - TRUE_LOWER_LEFT_Y)*y/((double) -WINDOW_SIZE[1]) + TRUE_UPPER_RIGHT_Y;
	return value;
    }

    public int x_true2window(double x){
	
	int value = (int) Math.round(WINDOW_SIZE[0]*(x-TRUE_LOWER_LEFT_X)/(TRUE_UPPER_RIGHT_X - TRUE_LOWER_LEFT_X));
	return value;
    }

    public int y_true2window(double y){

	int value = (int) Math.round(-WINDOW_SIZE[1]*(y-TRUE_UPPER_RIGHT_Y)/(TRUE_UPPER_RIGHT_Y - TRUE_LOWER_LEFT_Y));
	return value;
    }

    /* affine transformation TRUE <-> DISPLAY coordinates 
       we rescale the y axis for DISPLAY, so that DISPLAY x and y
       have same scales
    */
    public double y_true2display(double y){
	double value = (y - TRUE_LOWER_LEFT_Y)*((double)WINDOW_SIZE[1])/((double)WINDOW_SIZE[0])*(TRUE_UPPER_RIGHT_X - TRUE_LOWER_LEFT_X)/(TRUE_UPPER_RIGHT_Y - TRUE_LOWER_LEFT_Y);
	return value;
    }

    /* here is the function for the curve in the picture */
    public double f(double x){
	double value;
	value = Math.exp(x+.5);
	return value;
    }

    public boolean mouseDrag(Event e, int x, int y)
    {
       return mouseDown(e,x,y);
    }

    public boolean mouseDown(Event e, int x, int y)
    {

	// redraw the picture
	redraw(x,y);

	// reset the mouse position
	set_position(x, y);
	
	return true;
    }

    /* reset the mouse position */
    public void set_position(int x, int y)
    {
	mouse_position[0] = x;
	mouse_position[1] = y;
    }
	

    /* redraw the picture */
    public void redraw(int x, int y)
    {
	Graphics g = getGraphics();

	// draw white over whole picture
	g.setColor(Color.white);
	g.fillRect(0, 0, WINDOW_SIZE[0], WINDOW_SIZE[1]);

	// draw moving lines in new position
	g.setColor(Color.green);
	if (x != WINDOW_BASEPT[0]){
	   g.drawLine(x, 0, x, WINDOW_SIZE[1]); // vertical line
	   g.setColor(Color.magenta);
	   g.drawLine(0, secant_line_function(0,x,y), WINDOW_SIZE[0], secant_line_function(WINDOW_SIZE[0],x,y));	// secant line
	}

	// put in text labels
	// rescale x and y coords, call new coords DISPLAY
	double DISPLAY_X, DISPLAY_Y, dx, dy, dybydx;
	DISPLAY_X = x_window2true(x);
	DISPLAY_Y = y_true2display(f(DISPLAY_X));
	dx = DISPLAY_X - TRUE_BASEPOINT[0];
	dy = DISPLAY_Y - y_true2display(TRUE_BASEPOINT[1]);
	dybydx = dy/dx;
	g.setColor(Color.black);
	g.drawString("x axis", 400, 280); // x axis label
	g.drawString("y axis", 20, 20);   // y axis label
	g.drawString("y = f(x)", 420, 90); // graph label
	g.drawString("P", WINDOW_BASEPT[0] - 10, WINDOW_BASEPT[1] - 5); // basepoint label
	g.drawString("Q", x - 10, curve_y[x] - 5); // moving pt label
	if (x == WINDOW_BASEPT[0]){          // if moving pt = basepoint
	  g.setColor(Color.green);
	  g.drawString("x coord = " + TRUE_BASEPOINT[0], 100, 100);
	  g.drawString("y coord = " + y_true2display(TRUE_BASEPOINT[1]), 100, 110);
	  g.setColor(Color.blue);
	  g.drawString("dx = 0" , 100, 120);
	  g.drawString("dy = 0" , 100, 130);
	  g.setColor(Color.magenta);
	  g.drawString("dy/dx is undefined" , 100, 140);
	}

	else{
	  g.setColor(Color.green);
	  if (x == WINDOW_AXIS[1]){            // make WINDOW y axis have x coord 0.0
	      g.drawString("x coord = 0.00" , 100, 100);
	  }
	  else{
	      g.drawString("x coord = " + DISPLAY_X, 100, 100);
	  }
	  g.drawString("y coord = " + DISPLAY_Y, 100, 110);
	  g.setColor(Color.blue);
	  g.drawString("dx = " + dx , 100, 120);
	  g.drawString("dy = " + dy , 100, 130);
	  g.setColor(Color.magenta);
	  g.drawString("dy/dx = " + dybydx , 100, 140);
	}

	
	// vertical line through basepoint
	g.setColor(Color.red);
	g.drawLine(WINDOW_BASEPT[0], 0, WINDOW_BASEPT[0], WINDOW_SIZE[1]);

	// draw the coordinate axes
	g.setColor(Color.black);
	g.drawLine(0, WINDOW_AXIS[0], WINDOW_SIZE[0], WINDOW_AXIS[0]); // x axis
	g.drawLine(WINDOW_AXIS[1], 0, WINDOW_AXIS[1], WINDOW_SIZE[1]); // y axis
	
	// draw the curve
	g.setColor(Color.blue);
	g.drawPolyline(curve_x, curve_y, WINDOW_SIZE[0]);

	/*
	for (int i=0; i < WINDOW_SIZE[0]; i++){
	    g.drawRect(i, curve_y[i], 1, 1); // plot curve as rectangles
	}
	*/


    }

    /* compute and return the y WINDOW coord on the secant
       line for the point whose x WINDOW coord is the argument
    */
    public int secant_line_function(int x, int current_mouse_x, int current_mouse_y)
    {
	int value;
	double true_secant_slope;
	double window_secant_slope;

	true_secant_slope = (f(x_window2true(current_mouse_x)) - TRUE_BASEPOINT[1])/(x_window2true(current_mouse_x) - TRUE_BASEPOINT[0]);

	window_secant_slope = - ((double) WINDOW_SIZE[1])/((double) WINDOW_SIZE[0])*(TRUE_UPPER_RIGHT_X - TRUE_LOWER_LEFT_X)/(TRUE_UPPER_RIGHT_Y - TRUE_LOWER_LEFT_Y)*true_secant_slope;

	value = (int) Math.round(window_secant_slope*(x - WINDOW_BASEPT[0]) + WINDOW_BASEPT[1]);
	return value;
    }

}
	     
	     
/************************* Developement Notes **********************

There is no elegant object oriented programming in this applet!

  redrawing "blinks".  this goes away if curve is cut out.  this problem 
  is a time delay between old and new line redraw.

Aha, this last problem is eliminated by redrawing the moving lines first, 
then all the stationary stuff.  I can't imagine why this makes a difference.


***************************************************************/



