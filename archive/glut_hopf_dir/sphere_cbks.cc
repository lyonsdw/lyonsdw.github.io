#include <stdio.h>
#include <stdlib.h>
#include <iostream.h>
#include <fstream.h>
#include <math.h>

#include <GL/gl.h>
#include <GL/glu.h>
#include <GL/glut.h>

#include "glut_hopf.h"
void fiber_plot (double a, double b, double c);


// declared in glut_hopf.cc
extern unsigned int sphere_window_width, sphere_window_height;

// declared in fiber_cbks.cc
extern int fiber_window;
extern int fiber_display_resolution;


// used in glut_hopf.cc
int sphere_window;

// used in fiber_cbks.cc
GLuint fiber_dpy_list_base;


// used in glut_hopf.cc
int sphere_sample_pt_cnt = 0;

double sphere_sample_x[MAX_NUM_SPHERE_PTS],
  sphere_sample_y[MAX_NUM_SPHERE_PTS],
  sphere_sample_z[MAX_NUM_SPHERE_PTS];

const int NUM_SAMPLE_COLORS = 20;
float sphere_sample_color[NUM_SAMPLE_COLORS][3] = {
  {1.0, 0.0, 0.0},
  {0.0, 1.0, 0.0},
  {1.0, 1.0, 0.0},
  {0.0, 0.0, 1.0},
  {1.0, 0.0, 1.0},
  {0.0, 1.0, 1.0},
  {0.34, 0.52, 0.78},
  {0.33, 0.33, 0.33},
  {0.77, 0.44, 0.44},
  {0.44, 0.77, 0.44},
  {0.55, 0.55, 0.22},
  {0.44, 0.44, 0.77},
  {0.55, 0.21, 0.55},
  {0.22, 0.55, 0.55},
  {0.66, 0.66, 0.66},
  {0.75, 0.0, 0.0},
  {1.0,  0.14, 0.0},
  {0.75, 0.28, 0.0},
  {0.75, 0.43, 0.0},
};


double fiber_pts[NUM_FIBER_PTS][3];

// internal static variables
static GLuint COORD_SYS_LIST, SPHERE_LIST, WIRE_SPHERE_LIST;

static struct {
  GLfloat trans[3];
  GLfloat rot[2];
} sphere_view_pt;


static struct {
  int state, ox, oy, nx, ny;
} sphere_mouse_info;

static const float SCALE = 0.5;
static const float BIAS  = 0.002;

static const float RADIUS = 1.0;
static const float DIST   = 2.5;

static float depth_val;
static double sphere_loc_x, sphere_loc_y, sphere_loc_z;

static GLdouble sphere_modelview_matrix[16], sphere_proj_matrix[16];
static GLint sphere_viewport[4];

static GLuint sphere_dpy_list_base;


void reset_sphere_view () {
  sphere_view_pt.rot[0]   =  45.0;
  sphere_view_pt.rot[1]   = -45.0;
  sphere_view_pt.trans[0] = sphere_view_pt.trans[1] = 0.0;
  sphere_view_pt.trans[2] = -(DIST + RADIUS);
} // end reset_sphere_view


void sphere_window_init () {
  glClearColor (1.0, 1.0, 1.0, 0.0);
  glShadeModel (GL_SMOOTH);
  glEnable (GL_LIGHT0);
  glEnable (GL_POLYGON_OFFSET_EXT);
  glPolygonOffsetEXT (SCALE, BIAS);
  glEnable (GL_DEPTH_TEST);
  glDepthFunc (GL_LESS);

  // Make MAX_NUM_SPHERE_PTS contiguous display list indicies
  sphere_dpy_list_base = glGenLists(MAX_NUM_SPHERE_PTS);
  glListBase (sphere_dpy_list_base);
  fiber_dpy_list_base  = glGenLists(MAX_NUM_SPHERE_PTS);
  glListBase (fiber_dpy_list_base);


  //  Make the COORD_SYS_LIST
  COORD_SYS_LIST = glGenLists(1);
  glNewList(COORD_SYS_LIST, GL_COMPILE);

  // Turn on antialiasing for the coordinate axes
  glEnable (GL_LINE_SMOOTH);
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
  // end of COORD_SYS_LIST

  // Create the WIRE_SPHERE_LIST
  WIRE_SPHERE_LIST = glGenLists(1);
  glNewList(WIRE_SPHERE_LIST, GL_COMPILE);
    glColor3f(0.5, 0.75, 1.0);
    glutWireSphere (RADIUS, 15, 15);
  glEndList();
  // end of WIRE_SPHERE_LIST


  // Create the SPHERE_LIST
  static float ambient[] = { 0.0, 0.0, 0.0, 1.0 };
  static float diffuse[] = { 1.0, 1.0, 1.0, 1.0 };
  static float lmodel_ambient[] = { 1.0, 1.0, 1.0, 1.0 };

  static float front_mat_diffuse[] = { 0.2, 0.7, 0.4, 1.0 };
  static float front_mat_ambient[] = { 0.1, 0.1, 0.1, 1.0 };
  static float back_mat_diffuse[] = { 1.0, 1.0, 0.2, 1.0 };
  static float back_mat_ambient[] = { 0.1, 0.1, 0.1, 1.0 };

  SPHERE_LIST = glGenLists(1);
  glNewList(SPHERE_LIST, GL_COMPILE);

  // Set light properties
  glLightfv(GL_LIGHT0, GL_AMBIENT, ambient);
  glLightfv(GL_LIGHT0, GL_DIFFUSE, diffuse);
  glLightModeli (GL_LIGHT_MODEL_TWO_SIDE, GL_TRUE);
  glLightModelfv(GL_LIGHT_MODEL_AMBIENT, lmodel_ambient);

  // Enable lighting
  glEnable (GL_LIGHTING);

  // Set sphere properties
  glMaterialfv(GL_FRONT, GL_DIFFUSE, front_mat_diffuse);
  glMaterialfv(GL_FRONT, GL_AMBIENT, front_mat_ambient);
  glMaterialfv(GL_BACK, GL_DIFFUSE, back_mat_diffuse);
  glMaterialfv(GL_BACK, GL_AMBIENT, back_mat_ambient);

  // Render a reasonably detailed sphere
  glutSolidSphere (RADIUS, 15, 15);

  // Turn lighting off
  glDisable (GL_LIGHTING);
  glEndList();
  // end of SPHERE_LIST

  // Set up current viewing start
  reset_sphere_view ();
} // end sphere_window_init



void sphere_window_draw () {
  glutSetWindow (sphere_window);
  glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

  glPushMatrix ();
    glTranslatef (sphere_view_pt.trans[0],
		  sphere_view_pt.trans[1],
		  sphere_view_pt.trans[2]);
    glRotatef (sphere_view_pt.rot[0], 1, 0, 0);
    glRotatef (sphere_view_pt.rot[1], 0, 1, 0);
    glLineWidth (1);
    glCallList (COORD_SYS_LIST);
    glCallList (WIRE_SPHERE_LIST);
    glCallList (SPHERE_LIST);

    for (int idx = sphere_dpy_list_base;
	 idx < sphere_dpy_list_base + sphere_sample_pt_cnt;
	 idx++) {
      glCallList (idx);
    }

    glGetDoublev (GL_MODELVIEW_MATRIX, sphere_modelview_matrix);
  glPopMatrix ();

  glutSwapBuffers();
  glFlush();
} // end sphere_window_draw



void sphere_window_reshape (int w, int h) {
  // save new values in static variables
  sphere_window_width  = w;
  sphere_window_height = h;

  // setup an save the viewport transformation
  glViewport (0, 0, w, h);
  glGetIntegerv (GL_VIEWPORT, sphere_viewport);

  // setup an save the projection transformation
  double asp_ratio = (GLdouble)w / (GLdouble)h;
  glMatrixMode   (GL_PROJECTION);
  glLoadIdentity ();
  gluPerspective (60.0, asp_ratio, DIST, DIST + RADIUS * 3.0);
  glGetDoublev   (GL_PROJECTION_MATRIX, sphere_proj_matrix);

  // setup an save the modelview transformation
  glMatrixMode (GL_MODELVIEW);
  glFlush ();
} // end sphere_window_reshape



void find_object_location (int mx, int my) {
  glReadPixels (mx, sphere_window_height - my,
		1, 1, GL_DEPTH_COMPONENT, GL_FLOAT, &depth_val);
  gluUnProject(mx, sphere_window_height - my, depth_val,
	       sphere_modelview_matrix, sphere_proj_matrix, sphere_viewport,
	       &sphere_loc_x, &sphere_loc_y, &sphere_loc_z);
} // end find_object_location


void add_sphere_dpy_list () {
  glutSetWindow (sphere_window);
  if (sphere_sample_pt_cnt < MAX_NUM_SPHERE_PTS - 1) {

    // Save the sphere sample locations
    sphere_sample_x[sphere_sample_pt_cnt] = sphere_loc_x;
    sphere_sample_y[sphere_sample_pt_cnt] = sphere_loc_y;
    sphere_sample_z[sphere_sample_pt_cnt] = sphere_loc_z;

    int idx = 0;
    glNewList (sphere_dpy_list_base + sphere_sample_pt_cnt, GL_COMPILE);
      idx = sphere_sample_pt_cnt % NUM_SAMPLE_COLORS;

      glColor3f (sphere_sample_color[idx][0],
		 sphere_sample_color[idx][1],
		 sphere_sample_color[idx][2]);
      glPushMatrix();
        glTranslatef (sphere_loc_x, sphere_loc_y, sphere_loc_z);
	glutSolidSphere (0.05, 3, 3);
      glPopMatrix ();
    glEndList();
  } // end if we can add another sphere
} // add_sphere_dpy_list



void add_fiber_dpy_list () {
  glutSetWindow (fiber_window);
  if (sphere_sample_pt_cnt < NUM_FIBER_PTS - 1) {
    int idx = 0;
    int skip_factor = (1.0 / (fiber_display_resolution / 100.0)) + 0.5;
    
    glNewList (fiber_dpy_list_base + sphere_sample_pt_cnt, GL_COMPILE);
      idx = sphere_sample_pt_cnt % NUM_SAMPLE_COLORS;
      glColor3f (sphere_sample_color[idx][0],
		 sphere_sample_color[idx][1],
		 sphere_sample_color[idx][2]);

      glBegin (GL_LINE_LOOP);
        for (idx = 0; idx < NUM_FIBER_PTS; idx += skip_factor) {
	  glVertex3d (fiber_pts[idx][0], fiber_pts[idx][1], fiber_pts[idx][2]);
	} // end for all hopf points
      glEnd();
    glEndList ();
  } // end if we can add another fiber
} // add_fiber_dpy_list



void add_to_dpy_lists () {
  add_sphere_dpy_list ();
  add_fiber_dpy_list  ();
  sphere_sample_pt_cnt++;
} // end add_to_dpy_lists


void make_new_res_fiber_dpy_lists () {
  int num_spheres = sphere_sample_pt_cnt;
  sphere_sample_pt_cnt = 0;
  for (int idx = 0; idx < num_spheres; idx++) {

    // Get the saved sphere sample locations
    sphere_loc_x = sphere_sample_x[idx];
    sphere_loc_y = sphere_sample_y[idx];
    sphere_loc_z = sphere_sample_z[idx];

    fiber_plot (sphere_loc_x, sphere_loc_y, sphere_loc_z);
    add_fiber_dpy_list ();
    sphere_sample_pt_cnt++;
  } // end for all sphere points
} // end make_new_res_fiber_dpy_lists


void read_base_point_file (char* filename) {
  ifstream base_points(filename, ios::in);

  sphere_sample_pt_cnt = 0;
  char line[256];
  while (base_points.getline (line, 256) &&
	 sphere_sample_pt_cnt < MAX_NUM_SPHERE_PTS) {
    sscanf (line, "%lf %lf %lf", 
	    &sphere_loc_x, &sphere_loc_y, &sphere_loc_z);

    //    cout << "Sphere sample loc: " << sphere_loc_x << "  " << sphere_loc_y
    //	 << "  " << sphere_loc_z << endl;
  
    fiber_plot (sphere_loc_x, sphere_loc_y, sphere_loc_z);
    add_to_dpy_lists ();

    sphere_window_draw ();
    fiber_window_draw ();
  
  } // end while

  base_points.close();
} // end read_base_point_file


void update_sphere_view () {
  int dx = sphere_mouse_info.ox - sphere_mouse_info.nx;
  int dy = sphere_mouse_info.ny - sphere_mouse_info.oy;

  switch(sphere_mouse_info.state) {
  case 1:	// rotate
    sphere_view_pt.rot[0] += (dy * 180.0)/500.;
    sphere_view_pt.rot[1] -= (dx * 180.0)/500.;
    CLAMP(sphere_view_pt.rot[0]);
    CLAMP(sphere_view_pt.rot[1]);
    break;

  case 2:	// zoom
    sphere_view_pt.trans[2] += (dx + dy) / 100.;
    break;

  case 4:
    find_object_location (sphere_mouse_info.nx, sphere_mouse_info.ny);
    fiber_plot (sphere_loc_x, sphere_loc_y, sphere_loc_z);
    add_to_dpy_lists  ();
    fiber_window_draw ();
    break;

  } // end switch
  sphere_window_draw ();
} // end update_sphere_view


void sphere_window_keyboard (unsigned char key, int x, int y) {
  switch(key) {
  case 27:
    exit(0);
    break;
  } // end switch
} // end sphere_window_keyboard


void sphere_window_motion (int x, int y) {
  if (sphere_mouse_info.state) {
    sphere_mouse_info.ox = sphere_mouse_info.nx;
    sphere_mouse_info.oy = sphere_mouse_info.ny;
    sphere_mouse_info.nx = x;
    sphere_mouse_info.ny = y;
    update_sphere_view ();
  } // end if (mouse_info.state)
} // end sphere_window_motion



void sphere_window_mouse (int button, int state, int x, int y) {
  if (button == GLUT_LEFT_BUTTON) {
    if (state == GLUT_DOWN) {
      sphere_mouse_info.state |= 1;
      sphere_mouse_info.nx = x;
      sphere_mouse_info.ny = y;
    } else if (state == GLUT_UP) {
      sphere_mouse_info.state &= ~1;
    } // end else if (state == GLUT_UP)

  } else if (button == GLUT_MIDDLE_BUTTON) {
    if (state == GLUT_DOWN) {
      sphere_mouse_info.state |= 2;
      sphere_mouse_info.nx = x;
      sphere_mouse_info.ny = y;
    } else if (state == GLUT_UP) {
      sphere_mouse_info.state &= ~2;
    } // end else if (state == GLUT_UP)

  } else if (button == GLUT_RIGHT_BUTTON) {
    if (state == GLUT_DOWN) {
      sphere_mouse_info.state |= 4;
      sphere_mouse_info.nx = x;
      sphere_mouse_info.ny = y;
      update_sphere_view();
    } else if (state == GLUT_UP) {
      sphere_mouse_info.state &= ~4;
    } // end else if (state == GLUT_UP)
  } // else if (   button == GLUT_RIGHT_BUTTON) 
} // end sphere_window_mouse



void fiber_plot (double a, double b, double c) {
  //  double a, b, c;		/* basepoint coords */
  int j;			/* point plotting index */
  double A,B,C;			/* fiber circle parameters */
  double x,y,z;			/* fiber circle coords */
  double norm;			/* norm of <a,b,c> */
  double t;			/* parameter for circles */
  double denom, sine, cosine;	/* auxilliary stuff */

  norm = sqrt(a * a + b * b + c * c);
  if (norm == 0.0) {
    cerr << "ERROR: fiber_plot(" << a << " " << b << " " << c << ")" << endl;
    cerr << "  Base point must NOT be zero" << endl;
    return;
  }
  a /= norm; b /= norm; c /= norm;

  if (a == -1) {
    for (j = 1; j <= NUM_FIBER_PTS; j++){
      t = j * 2 * M_PI / NUM_FIBER_PTS;
      x = 0;
      y = cos(t);
      z = sin(t);
      //      cout << "Fiber point: " << j << "  " << x << "  " << y << "  " << z << endl;
      fiber_pts[j - 1][0] = x;
      fiber_pts[j - 1][1] = y;
      fiber_pts[j - 1][2] = z;
    } // end for all FIBER POINTS

  } else if (a == 1){
    for (j = 1; j <= NUM_FIBER_PTS; j++){
      t = j * 2 * M_PI / NUM_FIBER_PTS;
      x = tan (t);
      y = 0;
      z = 0;
      if (x > 100.0) x = 100.0;
      if (x < -100.0) x = -100.0;
      //      cout << "Fiber point: " << j << "  " << x << "  " << y << "  " << z << endl;
      fiber_pts[j - 1][0] = x;
      fiber_pts[j - 1][1] = y;
      fiber_pts[j - 1][2] = z;
    } // end for all FIBER POINTS

  } else {
    A = 0.5 * sqrt (2 + 2 * a);
    B = -c / sqrt (2 + 2 *a );
    C = b / sqrt (2 + 2 * a);
    
    for (j = 1; j <= NUM_FIBER_PTS; j++) {
      t = j * 2 * M_PI / NUM_FIBER_PTS;
      sine = sin (t);
      cosine = cos (t);
      denom = 1 - A * cosine;
      x = A * sine / denom;
      y =(B * cosine + C * sine) / denom;
      z =(C * cosine - B * sine) / denom; 
      fiber_pts[j - 1][0] = x;
      fiber_pts[j - 1][1] = y;
      fiber_pts[j - 1][2] = z;
      //      cout << "Fiber point: " << j << "  " << x << "  " << y << "  " << z << endl;
    } // end for all FIBER POINTS
  } // end else
} // end fiber_plot



