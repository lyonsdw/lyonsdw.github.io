#include <stdio.h>
#include <stdlib.h>
#include <iostream.h>
#include <math.h>

#include <GL/gl.h>
#include <GL/glu.h>
#include <GL/glut.h>

#define CLAMP(x) (x = x > 360. ? x-360. : x < -360. ? x += 360. : x)

// declared in sphere_cbks.cc
extern int sphere_sample_pt_cnt;
extern GLuint fiber_dpy_list_base;


int fiber_window;
float fiber_window_line_width = 1.0;
int fiber_display_resolution = 100;
int draw_coord_system = 1;
char* base_pt_file = NULL;
int animation = 0;

static GLuint COORD_SYS_LIST;

static struct {
  GLfloat trans[3];
  GLfloat rot[2];
} fiber_view_pt;


static struct {
  int state, ox, oy, nx, ny;
} fiber_mouse_info;

//const float deg2rad = M_PI / 180.0;



void reset_fiber_view () {
  // default viewing position and orientation
  fiber_view_pt.rot[0]   =  45.0;
  fiber_view_pt.rot[1]   = -45.0;
  fiber_view_pt.trans[0] = fiber_view_pt.trans[1] = 0.0;
  fiber_view_pt.trans[2] = -5.0;
} // end reset_fiber_view



void fiber_window_draw () {
  glutSetWindow (fiber_window);
  glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

  register int idx;
  glPushMatrix ();
  glLoadIdentity ();
  glTranslatef (fiber_view_pt.trans[0],
		fiber_view_pt.trans[1],
		fiber_view_pt.trans[2]);
  glRotatef (fiber_view_pt.rot[0], 1, 0, 0);
  glRotatef (fiber_view_pt.rot[1], 0, 1, 0);
  /*
  float theta = deg2rad * fiber_view_pt.rot[0] / 2.0;
  float phi   = deg2rad * fiber_view_pt.rot[1] / 2.0;
  float angle = 2.0 * acosf (cosf (theta) * cosf (phi));
  float axis[3];
  if (angle == 0.0) {
    axis[0] = 1.0;
  } else {
    axis[0] = cosf (phi) * sinf (theta);
  }
  axis[1] = sinf (phi) * cosf (theta);
  axis[2] = -sinf (phi) * sinf (theta);
  cout << angle / deg2rad << "  " << axis[0] << "  " << axis[1]
       << "  " << axis[2] << endl;
  glRotatef (angle / deg2rad, axis[0], axis[1], axis[2]);
  */
    if (draw_coord_system) {
      glCallList (COORD_SYS_LIST);
    }

    glLineWidth (fiber_window_line_width);

    for (idx = fiber_dpy_list_base;
	 idx < fiber_dpy_list_base + sphere_sample_pt_cnt;
	 idx++) {
      glCallList (idx);
    }

  glPopMatrix ();

  glutSwapBuffers();
  glFlush();
} // end fiber_window_draw


void fiber_window_reshape (int w, int h) {
  glViewport (0, 0, w, h);
  glMatrixMode (GL_PROJECTION);
  glLoadIdentity();
  gluPerspective(60.0, (GLdouble)w / h, 0.01, 100);
  glMatrixMode(GL_MODELVIEW);
  glFlush();
} // end fiber_window_reshape


void fiber_window_init () {
  glClearColor (1.0, 1.0, 1.0, 0.0);
  glShadeModel (GL_FLAT);
  glEnable (GL_DEPTH_TEST);
  glDepthFunc (GL_LESS);

  glLineWidth (fiber_window_line_width);

  //  create the COORD_SYS_OBJ
  COORD_SYS_LIST = glGenLists(1);
  glNewList(COORD_SYS_LIST, GL_COMPILE);

  // Turn on antialiasing for the coordinate axes
  glEnable (GL_LINE_SMOOTH);
  glLineWidth (1);

  glColor3f(1.0, 0.0, 0.0);
  glBegin(GL_LINES);
    glVertex3f (0.0, 0.0, 0.0); glVertex3f (1.5, 0.0, 0.0);
  glEnd();

  glColor3f(0.0, 1.0, 0.0);
  glBegin(GL_LINES);
    glVertex3f (0.0, 0.0, 0.0); glVertex3f (0.0, 1.5, 0.0);
  glEnd();
 
  glColor3f(0.0, 0.0, 1.0);
  glBegin(GL_LINES);
    glVertex3f (0.0, 0.0, 0.0); glVertex3f (0.0, 0.0, 1.5);
  glEnd();

  // Set stipple lines for the negative coordinate axes
  glEnable (GL_LINE_STIPPLE);
  glLineStipple (1, 0x0c0f);

  glColor3f(1.0, 0.0, 0.0);
  glBegin(GL_LINES);
    glVertex3f (0.0, 0.0, 0.0); glVertex3f (-1.5, 0.0, 0.0);
  glEnd();

  glColor3f(0.0, 1.0, 0.0);
  glBegin(GL_LINES);
    glVertex3f (0.0, 0.0, 0.0); glVertex3f (0.0, -1.5, 0.0);
  glEnd();
 
  glColor3f(0.0, 0.0, 1.0);
  glBegin(GL_LINES);
    glVertex3f (0.0, 0.0, 0.0); glVertex3f (0.0, 0.0, -1.5);
  glEnd();
  glDisable (GL_LINE_STIPPLE);
  glDisable (GL_LINE_SMOOTH);

  glEndList();
  // end of COORD_SYS_OBJ

  // Set up current viewing start
  reset_fiber_view ();
} // end fiber_window_init
  

void update_fiber_view () {
  int dx = fiber_mouse_info.ox - fiber_mouse_info.nx;
  int dy = fiber_mouse_info.ny - fiber_mouse_info.oy;

  switch(fiber_mouse_info.state) {
  case 1:	// rotate
    fiber_view_pt.rot[0] += (dy * 180.0)/500.;
    fiber_view_pt.rot[1] -= (dx * 180.0)/500.;
    CLAMP(fiber_view_pt.rot[0]);
    CLAMP(fiber_view_pt.rot[1]);
    break;

  case 2:	// zoom
    fiber_view_pt.trans[2] += (dx + dy) / 100.;
    break;

  } // end switch
  fiber_window_draw ();
} // end update_fiber_view


void x_rot_animation () {
  fiber_view_pt.rot[0] += 2;
  fiber_view_pt.rot[0] = ((int)fiber_view_pt.rot[0]) % 360;
  glutPostRedisplay();
} // end x_rot_animation


void y_rot_animation () {
  fiber_view_pt.rot[1] += 2;
  fiber_view_pt.rot[1] = ((int)fiber_view_pt.rot[1]) % 360;
  glutPostRedisplay();
} // end y_rot_animation


void neg_z_trans_animation () {
  fiber_view_pt.trans[2] -= 0.1;
  glutPostRedisplay();
} // end neg_z_trans_animation


void z_trans_animation () {
  fiber_view_pt.trans[2] += 0.1;
  glutPostRedisplay();
} // end z_trans_animation


void fiber_window_keyboard (unsigned char key, int x, int y) {
  switch(key) {
  case 27:
    exit(0);
    break;

  case 'h':
    cout << "h: this help menu" << endl;
    cout << "x: rotation about the x-axis animation" << endl;
    cout << "y: rotation about the y-axis animation" << endl;
    cout << "b: translation in -z-axis animation" << endl;
    cout << "f: translation in  z-axis animation" << endl << endl;
    cout << "ESC: QUIT" << endl;
    break;

  case 'x':
    animation = (animation ? 0 : 1);
    if (animation) {
      glutIdleFunc (x_rot_animation);
    } else {
      glutIdleFunc (NULL);
    }
    break;

  case 'y':
    animation = (animation ? 0 : 1);
    if (animation) {
      glutIdleFunc (y_rot_animation);
    } else {
      glutIdleFunc (NULL);
    }
    break;

  case 'b':
    animation = (animation ? 0 : 1);
    if (animation) {
      glutIdleFunc (neg_z_trans_animation);
    } else {
      glutIdleFunc (NULL);
    }
    break;

  case 'f':
    animation = (animation ? 0 : 1);
    if (animation) {
      glutIdleFunc (z_trans_animation);
    } else {
      glutIdleFunc (NULL);
    }
    break;
    
  } // end switch
} // end fiber_window_keyboard


void fiber_window_mouse (int button, int state, int x, int y) {
  if (button == GLUT_LEFT_BUTTON) {
    if (state == GLUT_DOWN) {
      fiber_mouse_info.state |= 1;
      fiber_mouse_info.nx = x;
      fiber_mouse_info.ny = y;
    } else if (state == GLUT_UP) {
      fiber_mouse_info.state &= ~1;
    } // end if button 1 press or release

  } else if (button == GLUT_MIDDLE_BUTTON) {
    if (state == GLUT_DOWN) {
      fiber_mouse_info.state |= 2;
      fiber_mouse_info.nx = x;
      fiber_mouse_info.ny = y;
    } else if (state == GLUT_UP) {
      fiber_mouse_info.state &= ~2;
    } // end if button 2 press or release
  } // end if (button == GLUT_MIDDLE_BUTTON)
} // end fiber_window_mouse


void fiber_window_motion (int x, int y) {
  if (fiber_mouse_info.state) {
    fiber_mouse_info.ox = fiber_mouse_info.nx;
    fiber_mouse_info.oy = fiber_mouse_info.ny;
    fiber_mouse_info.nx = x;
    fiber_mouse_info.ny = y;
    update_fiber_view ();
  } // end if (mouse_info.state)
} // end fiber_window_motion
