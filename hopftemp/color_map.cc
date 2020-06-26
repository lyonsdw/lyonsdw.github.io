#include <stdio.h>
#include <stdlib.h>
#include <iostream.h>
#include <math.h>

void main(int argc, char* argv[]) {

  if (argc != 2) { cerr << argv[0] << " size" << endl; exit(0); }
  int idx;
  float red, green, blue;
  cout.precision(3);
  // heated spectrum

  int cmap_size = atoi(argv[1]);
  int stage_size = (int) cmap_size / 7.0;

  //  cout << "STAGE 1" << endl;
  for (idx = 0; idx < stage_size; idx++) {
    red   = 0.0;
    green = 0.0;
    blue  = (idx * (255.0 / stage_size)) / 255.0;
    //    cout << idx << "  ";
    cout << "{ " << red << ", " << green << ", " << blue << " }," << endl;
  }

  //  cout << endl << "STAGE 2" << endl;
  for (idx = stage_size; idx < 2 * stage_size; idx++) {
    red   = 0.0;
    green = ((idx - stage_size) * (255.0 / stage_size)) / 255.0;
    blue  = 255.0 / 255.0;
    //    cout << idx << "  ";
    cout << "{ " << red << ", " << green << ", " << blue << " }," << endl;
  }

  //  cout << endl << "STAGE 3" << endl;
  for (idx = 2 * stage_size; idx < 3 * stage_size; idx++) {
    red   = 0.0;
    green = 255.0 / 255.0;
    blue  = (255 - (idx - 2 * stage_size) * (255.0 / stage_size)) / 255.0;
    //    cout << idx << "  ";
    cout << "{ " << red << ", " << green << ", " << blue << " }," << endl;
  }

  //  cout << endl << "STAGE 4" << endl;
  for (idx = 3 * stage_size; idx < 4 * stage_size; idx++) {
    red   = ((idx - 3 * stage_size) * (255.0 / stage_size)) / 255.0;
    green = 255.0 / 255.0;
    blue  = 0.0;
    //    cout << idx << "  ";
    cout << "{ " << red << ", " << green << ", " << blue << " }," << endl;
  }

  //  cout << endl << "STAGE 5" << endl;
  for (idx = 4 * stage_size; idx < 5 * stage_size; idx++) {
    red   = 255.0 / 255.0;
    green = (255 - (idx - 4 * stage_size) * (255.0 / stage_size)) / 255.0;
    blue  = 0.0;
    //    cout << idx << "  ";
    cout << "{ " << red << ", " << green << ", " << blue << " }," << endl;
  }

  //  cout << endl << "STAGE 6" << endl;
  for (idx = 5 * stage_size; idx < 6 * stage_size; idx++) {
    red   = 255.0 / 255.0;
    green = 0.0;
    blue  = ((idx - 5 * stage_size) * (255.0 / stage_size)) / 255.0;
    //    cout << idx << "  ";
    cout << "{ " << red << ", " << green << ", " << blue << " }," << endl;
  }

  //  cout << endl << "STAGE 7" << endl;
  for (idx = 6 * stage_size; idx < cmap_size; idx++) {
    red   = 255.0 / 255.0;
    green = ((idx - 6 * stage_size) * (255.0 / stage_size)) / 255.0;
    blue  = 255.0 / 255.0;
    //    cout << idx << "  ";
    cout << "{ " << red << ", " << green << ", " << blue << " }," << endl;
  }
}
