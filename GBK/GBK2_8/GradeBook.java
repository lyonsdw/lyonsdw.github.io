package GBK2_8;
import GBK2_8.*;

import java.io.*;
import java.util.*;

/************************************************************************
 * GradeBook object holds all the grade data for one academic class.
 * main() runs the user interface to enter new grades and produce
 * reports.
 *
 * compile with: javac *.java
 * run with:     java GradeBook [filename | -e filename | -h filename]
 *   
 * author: David W. Lyons, lyons@lvc.edu
 *************************************************************************/
public class GradeBook {

  private final static String VERSION ="gbk v2.8";

  private final static int MAX_STUDENT_COUNT = 500;
  private static boolean DROP_LOWEST = true;
  private final static int OUTPUT_COLUMNS = 72;
  private final static int OUTPUT_ROWS = 70;
  private final static String INPUT_BACKUP_FILE = "gbk.data.bak";

  private static String  inFileName;           // input file

  private String         courseTitle;	   

  private AssignmentList assignmentList;
  private GradeScale     gradeScale;
  private Student[]      student;
  private static int     studentCount;
  private ClassStats     classStats;
  private static int     histGroupChoice;
  private static int     histItemChoice;

  private String         publicNotes;
  private String         privateNotes;

  private static String  inDataBuffer;
  private static String  outDataBuffer;

  // methods to set instance variables
  public void setInFileName(String inFileName){this.inFileName = inFileName;}

  // accessor methods
  public static boolean dropLowest(){return DROP_LOWEST;}
  public static int getStudentCount(){return studentCount;}
  public static int getOutputCols(){return OUTPUT_COLUMNS;}
  public AssignmentList getAssignmentList(){return assignmentList;}
  public GradeScale getGradeScale(){return gradeScale;}

  // 
  public static void main(String[] args) {

    GradeBook currentClass = new GradeBook();
    
    int flow = readArgs(args);

    switch (flow){

      // bad command line syntax
    case -1:
      System.out.println("Usage: java GradeBook [filename| -e filename |-h filename]");
      System.exit(0);

      // single argument which is input file name
    case 0:
      currentClass = new GradeBook(inFileName);
      if (currentClass.assignmentList.getGroupSize()[1]==0) {
	currentClass.writeList();
	currentClass.writeLinedList();
	currentClass.writeAttendList();
	currentClass.writeXfigAttendList();
	System.exit(0);
      }
      break;

      // no arguments
    case 1:
      getInFileName();
      currentClass = new GradeBook(inFileName);
      currentClass.menu();

      // arguments: -e filename
    case 2:
      currentClass = new GradeBook(inFileName);
      currentClass.enterGrades();

      // arguments: -h filename
    case 3:
      currentClass = new GradeBook(inFileName);
      currentClass.getHistChoice();
      
    }

    // write report output files
    currentClass.write();

    cleanup();
  }

  private void menu(){

    char choice;
    
    // draw the menu
    // there must be a better
    // way to clear the screen!
    String menuLine;
    menuLine = "\n                        " + VERSION;
    System.out.println(menuLine + "\n");    
    menuLine = "                               by David W. Lyons, lyons@lvc.edu";
    //    System.out.println(menuLine + "\n");
    menuLine = "   \"" + inFileName + "\" is the current input file";
    System.out.println(menuLine + "\n");
    menuLine = "E  Enter grades";
    System.out.println(menuLine);
    menuLine = "W  Write output files and quit";
    System.out.println(menuLine);
    menuLine = "H  choose Histogram group number and item number";
    System.out.println(menuLine);
    menuLine = "N  choose a New input file";
    System.out.println(menuLine);
    menuLine = "Q  Quit, do not write output files";
    System.out.println(menuLine + "\n");
    menuLine = "Choice: ";
    System.out.print(menuLine);

    choice = KeybdIn.readLineNonwhiteChar();
    // System.out.println("choice is " + choice);

    switch(choice){
      
    case 'E': case 'e':
      this.enterGrades();

    case 'W': case 'w':
      write();
      System.exit(0);

    case 'H': case 'h':
      this.getHistChoice();
      return;

    case 'N': case 'n':
      getInFileName();
      GradeBook currentClass= new GradeBook(inFileName);
      currentClass.menu();

    case 'Q': case 'q':
      System.exit(0);

    default:
      System.out.println("Please enter a valid choice (E,W,H,N, or Q)\n");
      menu();
    }
  }          // end of menu()

  
  public static void getInFileName(){
    System.out.print("Enter input file name: ");
    inFileName = KeybdIn.readLine().trim();
  }
  
  // *********************************************************************
  //                            constructors
  // *********************************************************************

  public GradeBook(){
  }
  
  public GradeBook(String filename){
    histGroupChoice = 0;
    histItemChoice = 0;
    inDataBuffer = "";
    try{
      BufferedReader inputStream = new BufferedReader(new FileReader(filename));
      String line = null;
      while ((line = inputStream.readLine()) != null){
	inDataBuffer += (line + "\n");
      }
      inputStream.close();
      // cut trailing carriage return
      inDataBuffer = inDataBuffer.substring(0,inDataBuffer.length()-1);  
    }
    catch(FileNotFoundException e){
      System.out.println("Input file " + filename + " not found");
      System.out.println("or could not be opened.");
      System.exit(0);
    }
    catch(IOException e){
      System.out.println("Error reading from input file " + filename +
			 ".");
      System.exit(0);
    }

    courseTitle = TextUtil.getDataBlock(inDataBuffer, "title").trim();

    // call assignmentList constructor
    assignmentList = new AssignmentList(TextUtil.getDataBlock(inDataBuffer, "assignments"));
    //   do not drop lowest grade if final exam has zero weight
    if (assignmentList.getGroupWeight()[assignmentList.getGroupCount()] == 0){
      DROP_LOWEST = false;
    }

    // call gradeScale constructor
    gradeScale = new GradeScale(TextUtil.getDataBlock(inDataBuffer, "grade scale"));
					    
    // make students
    studentCount = 0;
    student = new Student[MAX_STUDENT_COUNT];
    String studentRecords = TextUtil.getDataBlock(inDataBuffer, "student records");
    // now do a loop to make individual students

    // extract individual student record from block of records
    try{
      String line = "";      
      String currentRecord = "";
      BufferedReader b = new BufferedReader(new StringReader(studentRecords));

      // check current line for nonwhitespace chars
      while (true){
	line = b.readLine();
        if ((line == null) || TextUtil.isBlankLine(line)
	    && currentRecord.length() > 0){
	  studentCount++;
	  if (studentCount >= MAX_STUDENT_COUNT){
	    System.out.println("Too many student records found.");
	    System.exit(0);
	  }
	  student[studentCount]
	    = new Student(currentRecord.trim(), assignmentList, gradeScale);
	  if (line == null) break;
	  currentRecord = "";
        }
	else {currentRecord += (line + "\n");}
      }
      b.close();
    }
    catch(IOException e){
      System.out.println("Error reading string reader for\n"
			 + studentRecords);
    }

    // read private and public notes from inDataBuffer
    privateNotes = TextUtil.getDataBlock(inDataBuffer, "notes");
    publicNotes = TextUtil.getDataBlock(inDataBuffer, "public notes");

    // if there are any scores recorded, do the calculations
    // otherwise, just make a list of names

    // this is a kludgey fix!
    
    if (assignmentList.getGroupSize()[1]>0) {

    // call classStats constructor
    classStats = new ClassStats(assignmentList, gradeScale, student);
	
    }

    /*
    else {
      writeList();
      //      break;
      // System.exit(0);
    }
    */
  }
  // *********************************************************************
  //                       end of constructor
  // *********************************************************************

  // write data to various output files, one at a time
  // for each output file, construct a string outDataBuffer
  // then call writeOutFile() to write outDataBuffer to the file
  public void write(){

    writeGradeReport();

    writeShortGradeReport();

    writeSortedGrades();

    writeStats();

    writePostReport();

    writeHist(histGroupChoice, histItemChoice);

    writeList();

    writeLinedList();

    writeXfigAttendList();

    writeAttendList();

    updateInputFile();
  }

  // grade report: name and letter grade only
  public void writeShortGradeReport(){
    // output file name
    String gradeFile = "gbk.letter_grades.txt";

    outDataBuffer = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;
    
    // date stamp
    Date date = new Date();
    String dateStamp = date.toString();

    // title
    line += courseTitle;
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    line = TextUtil.centerText("*************************", OUTPUT_COLUMNS) + "\n";
    outDataBuffer += line;
    line = TextUtil.centerText("** Letter Grade Report **", OUTPUT_COLUMNS)
      + "   " + VERSION + "\n";
    outDataBuffer += line;
    line = TextUtil.centerText("*************************", OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    line = "Date: " + dateStamp;
    splitLoc = line.length();
    line += "Student Count: " + Integer.toString(studentCount);
    mark = line.lastIndexOf(":");
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS - 4);
    line += "\n\n";
    outDataBuffer += line;

    // name and letter grade
    for (int i=1; i<=studentCount; i++){
      line = student[i].getName();
      //      line = line.substring(0,10).trim();
      line = line.trim();
      int L = line.length();
      for (int j=40; j>=L; j--){
	line += " ";
      }
      line += student[i].getLetterGrade() + "\n";
      outDataBuffer += line;
    }

    // write the output to file
    outDataBuffer = TextUtil.paginateText(outDataBuffer, OUTPUT_ROWS);
    writeOutFile(gradeFile);
  }
  
  // grade report output file for instructor
  public void writeGradeReport(){
    // output file name
    String gradeFile = "gbk.grades.txt";

    outDataBuffer = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;

    
    // date stamp
    Date date = new Date();
    String dateStamp = date.toString();

    // title
    line += courseTitle;
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    line = TextUtil.centerText("******************", OUTPUT_COLUMNS) + "\n";
    outDataBuffer += line;
    line = TextUtil.centerText("** Grade Report **", OUTPUT_COLUMNS)
      + "   " + VERSION + "\n";
    outDataBuffer += line;
    line = TextUtil.centerText("******************", OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    line = "Date: " + dateStamp;
    splitLoc = line.length();
    line += "Student Count: " + Integer.toString(studentCount);
    mark = line.lastIndexOf(":");
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS - 4);
    line += "\n\n";
    outDataBuffer += line;

    line = "********* ASSIGNMENTS and GRADE SCALE *********";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    
    // assignments
    outDataBuffer += assignmentList.writeGradeReport()+"\n\n";

    // grade scale
    outDataBuffer += gradeScale.writeGradeReport() + "\n\n";

    line = "*************** STUDENT RECORDS ***************";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;

    // student record format explanation
    String stuRecFormatExplain = "Student Record Format:\n";
    line = "IdNumber, Name";
    splitLoc = line.length();
    line += "Cumulative Average and Grade";
    mark = line.length();
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS + 2);
    stuRecFormatExplain += line + "\n";
    line = "Assignment Group Name: scores (%)";
    splitLoc = line.length();
    line += "Average for this Assignment Group";
    mark = line.length();
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS + 2);
    stuRecFormatExplain += line + "\n";
    line = "(more scores, one line for each group of assignments)";
    stuRecFormatExplain += line + "\n";
    line = "Raw Scores";
    stuRecFormatExplain += line + "\n";
    line = "(lines of comments may follow)";
    stuRecFormatExplain += line + "\n";
    //outDataBuffer += stuRecFormatExplain + "\n";
    

    // student records
    for (int i=1; i<=studentCount; i++){
      outDataBuffer += student[i].writeGradeReport(assignmentList) +
	"\n\n";
    }

    // private notes
    line = "*************** NOTES ***************";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;    
    outDataBuffer += privateNotes + "\n\n";

    // public notes
    line = "*************** PUBLIC NOTES ***************";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;    
    outDataBuffer += publicNotes + "\n\n";

    // write the output to file
    outDataBuffer = TextUtil.paginateText(outDataBuffer, OUTPUT_ROWS);
    writeOutFile(gradeFile);
  }

  // list of student grade records, sorted by cumulative average
  // useful for determining letter grade thresholds
  public void writeSortedGrades(){
    // output file name
    String sortedGradeFile = "gbk.sorted.txt";

    outDataBuffer = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;

    
    // date stamp
    Date date = new Date();
    String dateStamp = date.toString();

    // title
    line += courseTitle;
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    line = TextUtil.centerText("*******************", OUTPUT_COLUMNS) + "\n";
    outDataBuffer += line;
    line = TextUtil.centerText("** Sorted Grades **", OUTPUT_COLUMNS)
      + "   " + VERSION + "\n";
    outDataBuffer += line;
    line = TextUtil.centerText("*******************", OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    line = "Date: " + dateStamp;
    splitLoc = line.length();
    line += "Student Count: " + Integer.toString(studentCount);
    mark = line.lastIndexOf(":");
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS - 4);
    line += "\n\n";
    outDataBuffer += line;

    line = "********* ASSIGNMENTS and GRADE SCALE *********";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    
    // assignments
    outDataBuffer += assignmentList.writeGradeReport()+"\n\n";

    // grade scale
    outDataBuffer += gradeScale.writeGradeReport() + "\n\n";

    line = "*************** STUDENT RECORDS ***************";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;

    // student record format explanation
    String stuRecFormatExplain = "Student Record Format:\n";
    line = "IdNumber, Name";
    splitLoc = line.length();
    line += "Cumulative Average and Grade";
    mark = line.length();
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS + 2);
    stuRecFormatExplain += line + "\n";
    line = "Assignment Group Name: scores (%)";
    splitLoc = line.length();
    line += "Average for this Assignment Group";
    mark = line.length();
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS + 2);
    stuRecFormatExplain += line + "\n";
    line = "(more scores, one line for each group of assignments)";
    stuRecFormatExplain += line + "\n";
    line = "Raw Scores";
    stuRecFormatExplain += line + "\n";
    line = "(lines of comments may follow)";
    stuRecFormatExplain += line + "\n";
    //outDataBuffer += stuRecFormatExplain + "\n";
    

    // student records
    // index j is cumulative average (rounded to nearest integer)
    for (int j=150; j>=-1; j--){
      for (int i=1; i<=studentCount; i++){
	//round(100*student[i].getOutOfOne(j,k))
	if (ClassStats.round(100*student[i].getOutOfOne(0,0))==j){
	  outDataBuffer += student[i].writeGradeReport(assignmentList) +
	    "\n\n";
	}
      }
    }

    // private notes
    line = "*************** NOTES ***************";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;    
    outDataBuffer += privateNotes + "\n\n";

    // public notes
    line = "*************** PUBLIC NOTES ***************";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;    
    outDataBuffer += publicNotes + "\n\n";

    // write the output to file
    outDataBuffer = TextUtil.paginateText(outDataBuffer, OUTPUT_ROWS);
    writeOutFile(sortedGradeFile);
  }
  
  // stats report output file for instructor
  public void writeStats(){
    // output file name
    String statsFile = "gbk.stats.txt";
    String gradeDistFile = "gbk.dist.txt";

    outDataBuffer = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;
    
    // date stamp
    Date date = new Date();
    String dateStamp = date.toString();

    // title
    line += courseTitle;
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    line = TextUtil.centerText("******************", OUTPUT_COLUMNS) + "\n";
    outDataBuffer += line;
    line = TextUtil.centerText("** CLASS STATS  **", OUTPUT_COLUMNS)
      + "   " + VERSION + "\n";
    outDataBuffer += line;
    line = TextUtil.centerText("******************", OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    line = "Date: " + dateStamp;
    splitLoc = line.length();
    line += "Student Count: " + Integer.toString(studentCount);
    mark = line.lastIndexOf(":");
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS - 4);
    line += "\n\n";
    outDataBuffer += line;

    // histogram
    outDataBuffer += classStats.writeHorizHist(0,0,assignmentList);
    outDataBuffer += "\n\n";

    // weights
    line = "";
    line += "Weights: \n";
    //debug

    for (int i=1; i<=assignmentList.getGroupCount(); i++){
      /*
      System.out.println(i + " " + assignmentList.getGroupName()[i] + " " + assignmentList.getGroupWeight()[i] + "\n");
      */
      line +=  (assignmentList.getGroupName()[i]).charAt(0)+ " " + assignmentList.getGroupWeight()[i] + "/" +  assignmentList.getTotalWeight() + "\n" ;

    }
    outDataBuffer += line + "\n";

    // grade scale
    outDataBuffer += gradeScale.writeGradeReport() + "\n\n";

    outDataBuffer += classStats.writeGradeReport(assignmentList) +
      "\n\n";

    outDataBuffer += classStats.writeGradeDist(student)[0] + "\n\n";

    writeOutFile(statsFile);

    // new experimental debug
    //  grade distribution data for multiple input files
    //   make writeGradeDist return a pair of strings?

    outDataBuffer = "";
    outDataBuffer += classStats.writeGradeDist(student)[1];
    writeOutFile(gradeDistFile);

    
  }

  // public grade report (posted grades)
  private void writePostReport(){
    String postFile = "gbk.post.txt";

    outDataBuffer = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;
    
    // date stamp
    Date date = new Date();
    String dateStamp = date.toString();

    // title
    line += courseTitle;
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    line = TextUtil.centerText("******************", OUTPUT_COLUMNS) + "\n";
    outDataBuffer += line;
    line = TextUtil.centerText("** Grade Report **", OUTPUT_COLUMNS) + "   " + VERSION + "\n";
    outDataBuffer += line;
    line = TextUtil.centerText("******************", OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    line = "Date: " + dateStamp;
    line += "\n\n";
    outDataBuffer += line;

    // public notes
    line = "*************** NOTES ***************";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;    
    outDataBuffer += publicNotes + "\n\n";
    
    line = "********* ASSIGNMENTS and GRADE SCALE *********";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    
    // assignments
    outDataBuffer += assignmentList.writePostedGradeReport()+"\n\n";      

    // grade scale
    outDataBuffer += gradeScale.writePostReport(assignmentList) + "\n\n";

    // student records
    // use randomPerm() to mix up the order of students

    line = "*************** STUDENT RECORDS ***************";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    
    int[] alpha = new int[studentCount + 1];
    alpha = RandomPerm.randomPerm(studentCount);
    for (int i=1; i<=studentCount; i++){
      line = student[alpha[i]].writePostReport(assignmentList);
      if ( line == "PRIV"){
	;
      }
      else {
        outDataBuffer += line + "\n\n";
      }
    }

    // cumulative histogram
    line = "*************** HISTOGRAM ***************";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n\n";
    outDataBuffer += line;
    outDataBuffer += classStats.writePostHist() + "\n\n";
    writeOutFile(postFile);
  }

  // histogram file 
  private void writeHist(int groupChoice, int itemChoice){
    String histFile = "gbk.hist.txt";
    String line = "";
    int splitLoc = 0;
    int mark = 0;

    outDataBuffer = "";

    // date stamp
    Date date = new Date();
    String dateStamp = date.toString();

    // title
    line += courseTitle;
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n";
    outDataBuffer += line;
    line = "Date: " + dateStamp;
    splitLoc = line.length();
    line += "Student Count: " + Integer.toString(studentCount);
    mark = line.lastIndexOf(":");
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS - 4);
    line += "\n";
    outDataBuffer += line;

    outDataBuffer += classStats.writeHorizHist(histGroupChoice,
					 histItemChoice, assignmentList);
    
    writeOutFile(histFile);

  }

  // list of students file
  private void writeList(){
    String listFile = "gbk.list.txt";
    String line = "";
    int splitLoc = 0;
    int mark = 0;

    outDataBuffer = "";

    // date stamp
    Date date = new Date();
    String dateStamp = date.toString();

    // title
    line += courseTitle;
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n";
    outDataBuffer += line;
    line = "Date: " + dateStamp;
    splitLoc = line.length();
    line += "Student Count: " + Integer.toString(studentCount);
    mark = line.lastIndexOf(":");
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS - 4);
    line += "\n\n";
    outDataBuffer += line;

    for (int i=1; i<=studentCount; i++){
      line = "       " + student[i].getName();
      if (i%5 == 0){
	line += "\n";
      }
      outDataBuffer += line + "\n";
    }
    // 10-2001 bug here, last paragraph of list is chopped off
    outDataBuffer += "\n";     // here is a kludge fix
    outDataBuffer = TextUtil.paginateText(outDataBuffer, OUTPUT_ROWS);
    writeOutFile(listFile);
  }

  // list  of students file with lines
  private void writeLinedList(){
    String linedlistFile = "gbk.lined_list.txt";
    String line = "";
    int splitLoc = 0;
    int mark = 0;

    outDataBuffer = "";

    // date stamp
    Date date = new Date();
    String dateStamp = date.toString();

    // title
    line += courseTitle;
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n";
    outDataBuffer += line;
    line = "Date: " + dateStamp;
    splitLoc = line.length();
    line += "Student Count: " + Integer.toString(studentCount);
    mark = line.lastIndexOf(":");
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS - 4);
    line += "\n\n\n\n\n\n";
    outDataBuffer += line;

    for (int i=1; i<=studentCount; i++){
      line = "_______" + student[i].getName();
      for (int j=1; j<=35-student[i].getName().length(); j++){
	line += "_";
      }
      for (int j=1; j<=15; j++){
	line += "|__";
      }
      line += "|";
      if (i%5 == 0){
        line += "\n";
      }
      outDataBuffer += line + "\n";
    }
    // 10-2001 bug here, last paragraph of list is chopped off
    outDataBuffer += "\n";     // here is a kludge fix
    outDataBuffer = TextUtil.paginateText(outDataBuffer, OUTPUT_ROWS);
    writeOutFile(linedlistFile);
  }


  private void writeAttendList(){
    String listFile = "gbk.attend_list.txt";
    String line = "";
    int splitLoc = 0;
    int mark = 0;

    outDataBuffer = "";

    // date stamp
    Date date = new Date();
    String dateStamp = date.toString();

    // title
    line += courseTitle;
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n";
    outDataBuffer += line;
    line = "Attendance List";
    line = TextUtil.centerText(line, OUTPUT_COLUMNS) + "\n";
    outDataBuffer += line;
    /*
    line = "Date: " + dateStamp;
    splitLoc = line.length();
    line += "Student Count: " + Integer.toString(studentCount);
    mark = line.lastIndexOf(":");
    line = TextUtil.justify(line, splitLoc, mark, OUTPUT_COLUMNS - 4);
    */
    line = "\n\n";
    outDataBuffer += line;
    line = "Date: ______________\n\n";
    outDataBuffer += line;
    line = "Please sign (full name, no initials, please) next to your printed name on the list.\n\n";
    outDataBuffer += line;

    for (int i=1; i<=studentCount; i++){
      line = "       " + student[i].getName();
      if (i%5 == 0){
	line += "\n";
      }
      outDataBuffer += line + "\n";
    }
    // 10-2001 bug here, last paragraph of list is chopped off
    outDataBuffer += "\n";     // here is a kludge fix
    outDataBuffer = TextUtil.paginateText(outDataBuffer, OUTPUT_ROWS);
    writeOutFile(listFile);
  }

  // list of students file, xfig lines for attendance sheet
  private void writeXfigAttendList(){
    String listFile = "gbk.xfig_attend_list.txt";
    String line = "";
    int splitLoc = 0;
    int mark = 0;
    int ypos = 0;

    outDataBuffer = "";

    for (int i=1; i<=studentCount; i++){
      ypos = 1700 + 225 * (i-1);
      line = "4 0 0 50 0 0 12 0.0000 6 165 1830 1350 " + ypos + " " + student[i].getName() + "\\001";
      outDataBuffer += line + "\n";
    }
    writeOutFile(listFile);
  }


  // update the input data file
  private void updateInputFile(){
    // write inDataBuffer to gbk.data.bak
    outDataBuffer = inDataBuffer.substring(0);
    writeOutFile(INPUT_BACKUP_FILE);
    // then write currentClass data to inFileName
    outDataBuffer = "";

    // title
    outDataBuffer += "\\begin{title}\n";
    outDataBuffer += TextUtil.getDataBlock(inDataBuffer, "title") + "\n";
    outDataBuffer += "\\end{title}\n\n";

    // assignments
    outDataBuffer += "\\begin{assignments}\n";
    outDataBuffer += assignmentList.updateInputFile();
    outDataBuffer += "\\end{assignments}\n\n";

    // grade scale
    outDataBuffer += "\\begin{grade scale}\n";
    outDataBuffer += TextUtil.getDataBlock(inDataBuffer, "grade scale") + "\n";
    outDataBuffer += "\\end{grade scale}\n\n";

    // student records
    outDataBuffer += "\\begin{student records}\n";
    for (int i=1; i<= studentCount; i++){
      outDataBuffer += student[i].updateInputFile(assignmentList) + "\n\n";
    }
    outDataBuffer += "\\end{student records}\n\n";    
    
    // notes
    outDataBuffer += "\\begin{notes}\n";
    outDataBuffer += TextUtil.getDataBlock(inDataBuffer, "notes") + "\n";
    outDataBuffer += "\\end{notes}\n\n";

    // public notes
    outDataBuffer += "\\begin{public notes}\n";
    outDataBuffer += TextUtil.getDataBlock(inDataBuffer, "public notes") + "\n";
    outDataBuffer += "\\end{public notes}\n\n";

    writeOutFile(inFileName);
  }

  // write outDataBuffer to output file filename
  private static void writeOutFile(String filename){
    PrintWriter outputStream = null;
    try{
      outputStream = new PrintWriter(new FileOutputStream(filename));
    }
    catch(FileNotFoundException e){
      System.out.println("Error opening output file " + filename);
      System.exit(0);
    }
    outputStream.println(outDataBuffer);
    outputStream.close();
  }
  
  private static int readArgs(String[] args){
    if (args.length == 1){
      inFileName = args[args.length - 1];
      return 0;
    }
    if (args.length == 0){
      return 1;
    }
    if (args[0].equals("-e")){
      inFileName = args[1];
      return 2;
    }
    if (args[0].equals("-h")){
      inFileName = args[1];
      return 3;
    }
    else {
      return -1;
    }
  }

  private void enterGrades(){
    System.out.print("\nChoose the group of assignments");
    System.out.println(" for which you wish to enter grades.");

    for (int i=1; i <= assignmentList.getGroupCount(); i++){
      System.out.println(i + "  " + assignmentList.getGroupName()[i]);
    }
    System.out.print("\nGroup number choice: ");
    int enterGroup = KeybdIn.readLineInt();
    if (enterGroup <= 0 || enterGroup > assignmentList.getGroupCount()){
      System.out.println("invalid group number choice, try again");
      enterGrades();
    }
    int enterItem = assignmentList.getGroupSize()[enterGroup] + 1;
    System.out.print("\nYou have chosen to enter grades for "
		       + assignmentList.getGroupName()[enterGroup]
		       + " " + enterItem + "."
                       + "  OK? (y/n): ");
    char ok = KeybdIn.readLineNonwhiteChar();
    switch (ok){
    case 'Y': case 'y':
      gradeEntryLoop(enterGroup, enterItem);
      break;
    case 'N': case 'n':
      break;
    default:
      System.out.println("try again, please choose y or n");
      break;
    }
    menu();
  }

  private void gradeEntryLoop(int enterGroup, int enterItem){
    int pointValue = 0;
    int[] score = new int[studentCount + 1];
    String line = "";
    int splitLoc = 0;
    int mark = 0;

    // get point value
    System.out.print("\nEnter the total point value: ");
    pointValue = KeybdIn.readLineInt();
    if (pointValue <= 0){
      System.out.println("Point value must be a positive integer");
      gradeEntryLoop(enterGroup, enterItem);
    }

    // get scores
    System.out.println("\nEnter student scores.");
    for (int i=1; i<= studentCount; i++){
      line = "";
      if (i%5 == 1){
	line += "\n";
      }
      line += "     " + student[i].getName();
      System.out.print(line + "\r");
      score[i] = KeybdIn.readLineInt();
    }

    // verify scores
    int verify=0;
    char verifyChar;
    System.out.println("\nVerify student scores.");    
    System.out.println("<return> if OK, n of not OK");
    for (int i=1; i<= studentCount; i++){
      line = "";
      if (i%5 == 1){
	line += "\n ";
      }
      else {line += "\r";}
      line += Integer.toString(score[i]);
      mark = line.length();
      line = TextUtil.justify(line,1,mark, 4);
      line += "  " + student[i].getName();
      System.out.print(line + "\r");

      switch (KeybdIn.readChar()){
      case 'N': case 'n':
	// flush newline character from stream
	KeybdIn.readChar();
	System.out.print("corrected score: ");
	score[i] = KeybdIn.readLineInt();
	i--;
	break;
      default:
	break;
      }
    }
    System.out.print("\nSave these grades? (y/n) ");
    char save = KeybdIn.readLineNonwhiteChar();
    if (save =='y' || save == 'Y'){
      assignmentList.incrementGroupSize(enterGroup);
      assignmentList.setPointValue(enterGroup,enterItem, pointValue);
      for (int i=1; i <= studentCount; i++){
	student[i].setScore(enterGroup, enterItem, score[i]);
      }
      updateInputFile();
      GradeBook currentClass = new GradeBook(inFileName);
      currentClass.menu();
    }
    else {System.out.println("grades not saved");}
    menu();
  }

  private void getHistChoice(){
    System.out.println("Choose an assignment for which you would like the histogram.");

    System.out.println("\nThe groups of assignments are");
    for (int i=1; i<= assignmentList.getGroupCount(); i++){
      if (assignmentList.getGroupSize()[i] > 0){
        System.out.println(i + "  " + assignmentList.getGroupName()[i]);
      }
    }
    System.out.println("\nChoose a group number: ");
    histGroupChoice = KeybdIn.readLineInt();
    if (histGroupChoice <= 0 || histGroupChoice >
	assignmentList.getGroupCount() ||
	assignmentList.getGroupSize()[histGroupChoice] == 0){
      System.out.println("invalid group number, try again");
      getHistChoice();
    }
    System.out.println("\nChoose a " +
		       assignmentList.getGroupName()[histGroupChoice] +
		       " item in the range 1--" +
		       assignmentList.getGroupSize()[histGroupChoice]);
    System.out.println("\nItem number choice: ");
    histItemChoice = KeybdIn.readLineInt();
    if (histItemChoice <= 0 || histItemChoice >
	assignmentList.getGroupSize()[histGroupChoice]){
      System.out.println("invalid item number, try again");
      getHistChoice();
    } 
    return;
  }

  private static void cleanup(){
  }

  /*
  // generate a random permutation of n symbols
  // to use this, declare a new array
  //   int[] alpha = new int[size + 1];
  //   alpha = randomPerm(size);
  public static int[] randomPerm(int size){

    int[] alpha = new int[size + 1];
    int[] a = new int[size+1];
    int randIndex = 0;

    for (int i=1; i<=size; i++){
      a[i] = i;
    }

    for (int i=size; i >=1; i--){
      randIndex = (int) Math.ceil(i*Math.random());
      alpha[i] = a[randIndex];
      int[] b = new int[i];

      for (int j=1; j<randIndex; j++){
	b[j]=a[j];
      }
      for (int j=randIndex; j<i; j++){
	b[j] = a[j+1];
      }
      a = b;
    }
    return alpha;
  }
  */
}

/* ***************************************************************************
   Development notes:

   proper javadoc style comments throughout

   update web page with instructions, examples, files to download, etc

   make getDateStamp() method to call once for each write() call

   put DROP_LOWEST = true line in {notes} section of input file, make
   drop_lowest an instance variable for each GradeBook object

   do something more elegant to handle how the program runs when there
   are no scores yet entered: we want to produce a list of names, at
   least; see comment "// if there are any scores recorded..."

   bug: (4/2002) to make a non-default (default is cumulative)
   histogram, you have to run the command line gbk -h filename.  If you
   leave off the filename, it doesn't parse the command line correctly
   (seems to think -h is the filename) and if you choose the histogram
   from the menu, it goes from getting your histogram choice to asking
   you for a grade entry choice

   ************************************************************************** */
									     
