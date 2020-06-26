#include <stdio.h>
#include <stdlib.h>
#include <iostream.h>
#include <math.h>

#include <GL/gl.h>
#include <GL/glu.h>
#include <GL/glut.h>

#include "fiber_cbks.h"
#include "sphere_cbks.h"


// declared in fiber_cbks.cc
extern int fiber_window, fiber_display_resolution;
extern float fiber_window_line_width;
extern int draw_coord_system;
//extern int animation;


// declared in sphere_cbks.cc
extern int sphere_window, sphere_sample_pt_cnt;
extern char* base_pt_file;

// used in sphere_cbks.cc
unsigned int sphere_window_width  = 300;
unsigned int sphere_window_height = 300;

enum {FIBER_CLEAR = 1, FIBER_COORD_SYS_TOGGLE, FIBER_RESET_VIEW, FIBER_QUIT};

enum {DEFAULT_BASE_POINT_FILE = 1, BASE_POINT_FILE_1, BASE_POINT_FILE_2,
      BASE_POINT_FILE_3, BASE_POINT_FILE_4, BASE_POINT_FILE_5,
      BASE_POINT_FILE_6, BASE_POINT_FILE_7, BASE_POINT_FILE_8};


void line_width_select (int value) {
  switch (value) {
  case 1:
    fiber_window_line_width = 1.0; break;

  case 2:
    fiber_window_line_width = 2.0; break;

  case 3:
    fiber_window_line_width = 3.0; break;

  default:
    fiber_window_line_width = 1.0;
  } // end switch
  fiber_window_draw ();
} // end line_width_select


void resolution_select (int value) {
  switch (value) {
  case 1:
    fiber_display_resolution = 1; break;

  case 2:
    fiber_display_resolution = 5; break;

  case 3:
    fiber_display_resolution = 10; break;

  case 4:
    fiber_display_resolution = 20; break;

  case 5:
    fiber_display_resolution = 30; break;

  case 6:
    fiber_display_resolution = 40; break;

  case 7:
    fiber_display_resolution = 50; break;

  case 8:
    fiber_display_resolution = 60; break;

  case 9:
    fiber_display_resolution = 70; break;

  case 10:
    fiber_display_resolution = 80; break;

  case 11:
    fiber_display_resolution = 90; break;

  case 12:
    fiber_display_resolution = 100; break;

  default:
    fiber_display_resolution = 100;
  } // end switch
  make_new_res_fiber_dpy_lists ();
  fiber_window_draw ();
} // end resolution_select
  


void base_point_file_select (int value) {
  switch (value) {
  case BASE_POINT_FILE_1:
    base_pt_file = "bpf1"; break;

  case BASE_POINT_FILE_2:
    base_pt_file = "bpf2"; break;

  case BASE_POINT_FILE_3:
    base_pt_file = "bpf3"; break;

  case BASE_POINT_FILE_4:
    base_pt_file = "bpf4"; break;

  case BASE_POINT_FILE_5:
    base_pt_file = "bpf5"; break;

  case BASE_POINT_FILE_6:
    base_pt_file = "bpf6"; break;

  case BASE_POINT_FILE_7:
    base_pt_file = "bpf7"; break;

  case BASE_POINT_FILE_8:
    base_pt_file = "bpf8"; break;
    
  case DEFAULT_BASE_POINT_FILE:
  default:
    base_pt_file = "baseptfile";
    break;
  } // end switch
  read_base_point_file (base_pt_file);
} // end base_point_file_select




void main_menu_select(int value) {
  switch (value) {
  case FIBER_CLEAR:
    sphere_sample_pt_cnt = 0;
    sphere_window_draw ();
    fiber_window_draw ();
    break;

  case FIBER_COORD_SYS_TOGGLE:
    if (draw_coord_system) draw_coord_system = 0;
    else draw_coord_system = 1;
    break;

  case FIBER_RESET_VIEW:
    reset_sphere_view();
    sphere_window_draw ();

    reset_fiber_view();
    fiber_window_draw ();
    break;

  case FIBER_QUIT:
    // Send ESC to exit
    sphere_window_keyboard (27, 0, 0);
    break;

  } // end switch

  glutPostRedisplay();
} // end main_menu_select




void main(int argc, char* argv[]) {
  glutInit(&argc, argv);

  // Fiber window
  glutInitWindowSize (600, 600);
  glutInitWindowPosition (600, 30);
  glutInitDisplayMode (GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);

  fiber_window = glutCreateWindow ("Fiber Window");
  fiber_window_init ();

  glutDisplayFunc (fiber_window_draw);
  glutReshapeFunc (fiber_window_reshape);
  glutKeyboardFunc (fiber_window_keyboard);
  glutMouseFunc  (fiber_window_mouse);
  glutMotionFunc (fiber_window_motion);

  // Hopf window menu
  int line_width_menu;
  line_width_menu = glutCreateMenu(line_width_select);
  glutAddMenuEntry("   1", 1);
  glutAddMenuEntry("   2", 2);
  glutAddMenuEntry("   3", 3);

  int resolution_menu;
  resolution_menu = glutCreateMenu(resolution_select);
  glutAddMenuEntry("    1", 1);
  glutAddMenuEntry("    5", 2);
  glutAddMenuEntry("   10", 3);
  glutAddMenuEntry("   20", 4);
  glutAddMenuEntry("   30", 5);
  glutAddMenuEntry("   40", 6);
  glutAddMenuEntry("   50", 7);
  glutAddMenuEntry("   60", 8);
  glutAddMenuEntry("   70", 9);
  glutAddMenuEntry("   80", 10);
  glutAddMenuEntry("   90", 11);
  glutAddMenuEntry("  100", 12);

  int base_point_menu;
  base_point_menu = glutCreateMenu(base_point_file_select);
  glutAddMenuEntry("  default", DEFAULT_BASE_POINT_FILE);
  glutAddMenuEntry("  bpf1", BASE_POINT_FILE_1);
  glutAddMenuEntry("  bpf2", BASE_POINT_FILE_2);
  glutAddMenuEntry("  bpf3", BASE_POINT_FILE_3);
  glutAddMenuEntry("  bpf4", BASE_POINT_FILE_4);
  glutAddMenuEntry("  bpf5", BASE_POINT_FILE_5);
  glutAddMenuEntry("  bpf6", BASE_POINT_FILE_6);
  glutAddMenuEntry("  bpf7", BASE_POINT_FILE_7);
  glutAddMenuEntry("  bpf8", BASE_POINT_FILE_8);

  glutCreateMenu(main_menu_select);
  glutAddMenuEntry("Clear", FIBER_CLEAR);
  glutAddMenuEntry("Reset View", FIBER_RESET_VIEW);
  glutAddSubMenu("Plot Base Pts", base_point_menu);
  glutAddMenuEntry("Toggle Coord Sys", FIBER_COORD_SYS_TOGGLE);
  glutAddSubMenu("Line Width", line_width_menu);
  glutAddSubMenu("Display Resolution", resolution_menu);
  glutAddMenuEntry("Quit", FIBER_QUIT);
  glutAttachMenu(GLUT_RIGHT_BUTTON);



  // Sphere window
  glutInitWindowSize (sphere_window_width, sphere_window_height);
  glutInitWindowPosition (620, 630);
  glutInitDisplayMode (GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);

  sphere_window = glutCreateWindow ("Sphere Window");
  sphere_window_init ();

  glutDisplayFunc (sphere_window_draw);
  glutReshapeFunc (sphere_window_reshape);
  glutKeyboardFunc (sphere_window_keyboard);
  glutMouseFunc  (sphere_window_mouse);
  glutMotionFunc (sphere_window_motion);


  glutMainLoop();
}
