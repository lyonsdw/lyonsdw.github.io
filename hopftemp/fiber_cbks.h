#ifndef __FIBER_CALLBACKS_HEADER_INCLUDED_
#define __FIBER_CALLBACKS_HEADER_INCLUDED_


//
// Functions defined in fiber_cbks.cc
//

// Fiber window functions
//
void fiber_window_draw ();
void fiber_window_reshape (int w, int h);
void fiber_window_init ();
void fiber_window_keyboard (unsigned char key, int x, int y);
void fiber_window_mouse (int button, int state, int x, int y);
void fiber_window_motion (int x, int y);
void update_fiber_view ();
void reset_fiber_view();




#endif
