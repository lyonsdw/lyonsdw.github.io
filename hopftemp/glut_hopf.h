#ifndef __GLUT_HOPF_HEADER_INCLUDED_
#define __GLUT_HOPF_HEADER_INCLUDED_

void fiber_window_draw ();



#define CLAMP(x) (x = x > 360. ? x-360. : x < -360. ? x += 360. : x)
const int MAX_NUM_SPHERE_PTS = 500;
const int NUM_FIBER_PTS      = 500;




#endif



