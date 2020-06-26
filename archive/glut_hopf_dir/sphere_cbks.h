#ifndef __SPHERE_CALLBACKS_HEADER_INCLUDED_
#define __SPHERE_CALLBACKS_HEADER_INCLUDED_

//
// Functions defined in sphere_cbks.cc
//

// Sphere window functions
//
void sphere_window_draw ();
void sphere_window_reshape (int w, int h);
void sphere_window_init ();
void sphere_window_keyboard (unsigned char key, int x, int y);
void sphere_window_mouse (int button, int state, int x, int y);
void sphere_window_motion (int x, int y);
void make_new_res_fiber_dpy_lists ();
void read_base_point_file (char* filename);
void update_sphere_view ();
void reset_sphere_view ();




#endif
