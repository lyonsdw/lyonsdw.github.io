package GBK2_10;
import GBK2_10.*;
import java.util.*;
import java.io.*;


/************************************************************************
 * Student object holds data for an individual student, including
 * name, id number, comments, scores, averages and letter grade.

 * constructor method calculates stuff for student

 * Grade calculation notes:

 * Excused missed assignments: an excused missed assignment is recorded
 * with a score of -1 in the data file.  These assignments are dropped
 * from the cumulative average (NOT replaced by the average of the other
 * assignments in the same group, as is done in gbk versions through 2.7)

 * To make a students record "private", that is, not posted to the
 * public grade report, add the string PRIV to the end (right side) of
 * the student's ID string in the input file
 ************************************************************************/
public class Student {

  // score[i][j] holds raw score for assnmt group i, item j

  private String     name;
  private String     idNumber;
  private String     comments;
  private String     email;
  private int        presentationCount;
  private int        absenceCount;  
  private String     nameandpresentationCount; // for permuted roster, daily in-class group report, new 9/2017
  private int[][]    score;	

  /* outOfOne[i][j]  holds score[i][j] / (total point value of assnmt i,j)
     outOfOne[i][0]  holds average of outOfOne values for assnmt group i
     outOfOne[0][0]  holds total cumulative average
  */

  private double[][] weight;
  public double[][] outOfOne;            
  private int        dropGroupNumber;
  private int        dropItemNumber;
  private String     letterGrade;

  // methods to set instance variables

  public void setName(String x) { this.name = x;}
  public void setIdNumber(String x) { this.idNumber = x;}
  public void setComments(String x) { this.comments = x;}
  public void setScore(int i, int j, int x) {
    int[][] newscore = new int[score.length][];
    for (int u=1; u<score.length; u++){
      newscore[u] = new int[score[u].length + 1];
    }
    for (int u=1; u<score.length; u++){
      for (int v=1; v<score[u].length; v++){
	newscore[u][v] = score[u][v];
      }
    }
    newscore[i][j] = x;
    score = newscore;
  }

  // accessor methods

  public String getName() { return this.name; }
  public String getIdNumber() { return this.idNumber; }
  public String getComments() { return this.comments; }
  public String getEmail() { return this.email; }
  public int getPresentationCount() { return this.presentationCount; }
  public int getAbsenceCount() { return this.absenceCount; }  
  public String getNameAndPresentationCount() { return this.nameandpresentationCount; }  

  public double getScore(int i, int j) {return this.score[i][j];}
  public double getOutOfOne(int i, int j) { return this.outOfOne[i][j]; }
  public String getLetterGrade() { return this.letterGrade; }


  // *********************************************************************
  //                         constructor
  // *********************************************************************
  public Student(String str, AssignmentList a, GradeScale gs){

    // get local copies of assignmentList and gradeScale data
    String[] groupName       = a.getGroupName();
    int      groupCount      = a.getGroupCount();
    int[]    groupSize       = a.getGroupSize();
    int[]    groupWeight     = a.getGroupWeight();
    int[][]  pointValue      = a.getPointValue();
    String[] letterGradeName = gs.getLetterGradeName();
    int[]    cutOff          = gs.getCutOff();
    int      exceptionCount  = gs.getExceptionCount();
    String[] exceptionIdNumber = gs.getExceptionIdNumber();
    String[] exceptionLetterGrade = gs.getExceptionLetterGrade();

    // initialize array instance variables

    score = new int[groupCount + 1][];
    weight = new double[groupCount + 1][];
    outOfOne = new double[groupCount + 1][];
    for (int i=0; i <= groupCount; i++){
      score[i] = new int[groupSize[i] + 1];
      weight[i] = new double[groupSize[i] + 1];
      outOfOne[i] = new double[groupSize[i] + 1];
    }

    // *****************************************
    // read data from the student record string
    // *****************************************
      
    // pick apart student record string str
    // to set name, idnumber, scores and comments
    // put in guards against bad data format
    try{
      String line = "";
      BufferedReader b = new BufferedReader(new StringReader(str));

      // first line is idNumber then name
      if ((line = b.readLine()) == null){
	System.out.println("Bad student data format for record\n" + str);
	System.exit(0);
      }
      idNumber = line.substring(0,line.indexOf(" ")).trim();
      name = line.substring(line.indexOf(" ")).trim();

      // next lines contain scores and maybe some text which
      // we will ignore
      String newToken = "";
      for (int i=1; i<=groupCount; i++){
	if (groupSize[i] > 0){
	  int j = 0;
	  if ((line = b.readLine()) == null){
	    System.out.println("Bad score data for student " + name);
	    System.exit(0);
	  }
	  StringTokenizer t = new StringTokenizer(line);
	  while (t.hasMoreTokens()){
	    newToken = t.nextToken();
	    if (Character.isDigit(newToken.charAt(0)) ||
		newToken.charAt(0) == '-'){
	      j++;
	      score[i][j] = Integer.parseInt(newToken);
	    }
	  }
	  if (j != groupSize[i]){
	    System.out.println("Wrong number of scores in group "
			       + groupName[i] + " for student "
			       + name);
	    System.exit(0);
	  }
	}
      }
      // finally read comments
      comments = "";
      email = "";
      presentationCount = 0;
      absenceCount = 0;      
      nameandpresentationCount = "";
      int linecount = 0;
      while ((line = b.readLine()) != null){
	comments += line + "\n";
	linecount++;
	// assign email string if first comment line contains "at" sign
	if (line.indexOf('@')>0 && linecount==1){email=line.trim();}
	if (line.indexOf("presentation")>=0){presentationCount = TextUtil.countMatches(line, ',')+1;}
	if (line.indexOf("absent")>=0){absenceCount = TextUtil.countMatches(line, ',')+1;}	
	//	System.out.println("index of presentation is " + Integer.toString(line.indexOf("presentation")) + " match count " + Integer.toString(TextUtil.countMatches(line,',')) + "\n");
	nameandpresentationCount = name;
	if (presentationCount>0){
	  nameandpresentationCount += " (";
	  for (int i=0;i<presentationCount;i++){
	    nameandpresentationCount += "*";
	    }
	nameandpresentationCount += ")";
	}
      }
      comments = comments.trim();
      b.close();
    }
    catch(IOException e){
      System.out.println("Error using StringReader for student\n" + str);
      System.exit(0);
    }

    // **************************************************
    //              done reading data
    // **************************************************
    
    // split off all this calculation into helper method tally()
    outOfOne[0][0] = 0;
    weight  [0][0] = 0;

    for (int i=1; i <= groupCount; i++){

      outOfOne[i][0] = 0;
      weight  [i][0] = 0;

      for (int j=1; j <= groupSize[i]; j++){

	// default is to drop the score
	outOfOne[i][j] = -1;
	weight  [i][j] = 0;

	// weight is set nonzero for nonnegative scores
	if (score[i][j] >= 0){
	  weight[i][j] = ((double) groupWeight[i])/((double)groupSize[i]);
	}
		
	double s = (double) score[i][j];
	double p = (double) pointValue[i][j];
	outOfOne[i][j] = s/p;

	// contribute to cum ave and assnmt group i ave
	outOfOne[0][0] += outOfOne[i][j] * weight[i][j];
	outOfOne[i][0] += outOfOne[i][j] * weight[i][j];
	weight[0][0]   += weight[i][j];
	weight[i][0]   += weight[i][j];
      }
      // adjust group i ave according to weight
      if (weight[i][0] != 0){
	outOfOne[i][0] = outOfOne[i][0] / weight[i][0];
      }
      else {outOfOne[i][0] = -1;}
    }
    // adjust cum ave according to weight
    if (weight[0][0] != 0){
      outOfOne[0][0] = outOfOne[0][0] / weight[0][0];
    }
    else {outOfOne[0][0] = -1;}

    // change starts here 1/2017 gbk v 2.10
    // now do drop lowest routine
    // if final exam grade is present
    if (GradeBook.dropLowest() && (groupSize[groupCount] > 0)){   
      dropGroupNumber = 0;
      dropItemNumber  = 0;
      double bestAve  = outOfOne[0][0];
      double compareTo = bestAve;

      for (int i=1; i < groupCount; i++){  // changed this line 1/2017 strict less than
	for (int j=1; j <= groupSize[i]; j++){
	  // changes beginning spring semester 2017:
	  // do NOT compare to final exam
	  // zero scores ARE eligible for dropping
	  if (true){
	    compareTo = (outOfOne[0][0]*weight[0][0]
			 - outOfOne[i][j]*weight[i][j])/(weight[0][0] - weight[i][j]);
	    if (bestAve < compareTo){
	      bestAve = compareTo;
	      dropGroupNumber = i;
	      dropItemNumber = j;
	    }
	  }
	}
      }
      outOfOne[0][0] = bestAve;
    }

    // assign letter grade
    for (int i=1; i<letterGradeName.length; i++){
      if (ClassStats.round(outOfOne[0][0]*100) >= cutOff[i]){
	letterGrade = letterGradeName[i];
	break;
      }
      // if average is negative, no grade is assigned
      letterGrade = "No grade";
    }
    // check to see if idnumber is on list of exceptions
    for (int i=1; i <= exceptionCount; i++){
      if (idNumber.equals(exceptionIdNumber[i])){
	letterGrade = exceptionLetterGrade[i];
	break;
      }
    }
  }
  // *********************************************************************
  //                       end of constructor
  // *********************************************************************

  // write string for grade report output
  public String writeGradeReport(AssignmentList a){
    String srString = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;
    
    // make local copies of data needed
    String[] groupName = a.getGroupName();
    int groupCount = a.getGroupCount();
    int[] groupSize = a.getGroupSize();
    
    line += idNumber + " " + name;
    splitLoc = line.length();
    line += "Ave & Grade: ";
    mark = line.lastIndexOf(":");
    if (outOfOne[0][0] < 1.0){
      line += " ";
    }
    if (outOfOne[0][0] < 0.1){
      line += " ";
    }
    line += Integer.toString(ClassStats.round(outOfOne[0][0]*100))
                + "  " + letterGrade + "\n";
    line = TextUtil.justify(line, splitLoc, mark,
			     GradeBook.getOutputCols() -4);
    srString += line;

    for (int i=1; i<=groupCount; i++){
      line = "";
      // modified 11/2006
      // suppress lines for Final Exams with zero weight,
      // but show other groups with zero weight
      if (groupSize[i] > 0 && ( (a.getGroupWeight()[i] > 0) || (i<groupCount))){
	line += groupName[i] +"(%): ";
	for (int j=1; j<=groupSize[i]; j++){
	  if (outOfOne[i][j] < 0){
	    line += "N/A ";
	  }
	  else if (GradeBook.dropLowest()
		   && (i == dropGroupNumber) && (j == dropItemNumber)){
	    line +=
	      Integer.toString(ClassStats.round(outOfOne[i][j]*100)) +
	      "(drop) ";
	  }
	  else {
	    line += Integer.toString(ClassStats.round(outOfOne[i][j]*100)) + " ";
	  }
	}
	splitLoc = line.length();
	line += groupName[i] + " Ave: ";
	mark = line.lastIndexOf(":");
	if (outOfOne[i][0] >= 0){    
	if (outOfOne[i][0] < 1.0){
	  line += " ";
	}
	if (outOfOne[i][0] < 0.1){
	  line += " ";
	}
	}
	if (outOfOne[i][0] < 0){
	  line += "N/A\n";
	}
	else{
	line +=  Integer.toString(ClassStats.round(outOfOne[i][0]*100))
	  + "\n";
	}
	line = TextUtil.justify(line, splitLoc, mark,
				 GradeBook.getOutputCols()-4);
	srString += line;
      }
    }
    srString += "Raw Scores: ";
    for (int i=1; i<=groupCount; i++){
      for (int j=1; j<=groupSize[i]; j++){
	srString += Integer.toString(score[i][j]) + " ";
      }
    }
    srString += "\n";
    srString += comments;
    srString = srString.trim();
    return srString;
  }

  // write string for email grade report output
  public String writeEmailGradeReport(AssignmentList a){
    String srString = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;
    
    // make local copies of data needed
    String[] groupName = a.getGroupName();
    int groupCount = a.getGroupCount();
    int[] groupSize = a.getGroupSize();
    
    line += idNumber + " " + name;
    splitLoc = line.length();
    line += "Ave & Grade: ";
    mark = line.lastIndexOf(":");
    if (outOfOne[0][0] < 1.0){
      line += " ";
    }
    if (outOfOne[0][0] < 0.1){
      line += " ";
    }
    line += Integer.toString(ClassStats.round(outOfOne[0][0]*100))
                + "  " + letterGrade + "\n";
    line = TextUtil.justify(line, splitLoc, mark,
			     GradeBook.getOutputCols() -4);
    srString += line;

    for (int i=1; i<=groupCount; i++){
      line = "";
      // modified 11/2006
      // suppress lines for Final Exams with zero weight,
      // but show other groups with zero weight
      if (groupSize[i] > 0 && ( (a.getGroupWeight()[i] > 0) || (i<groupCount))){
	line += groupName[i] +"(%): ";
	for (int j=1; j<=groupSize[i]; j++){
	  if (outOfOne[i][j] < 0){
	    line += "N/A ";
	  }
	  else if (GradeBook.dropLowest()
		   && (i == dropGroupNumber) && (j == dropItemNumber)){
	    line +=
	      Integer.toString(ClassStats.round(outOfOne[i][j]*100)) +
	      "(drop) ";
	  }
	  else {
	    line += Integer.toString(ClassStats.round(outOfOne[i][j]*100)) + " ";
	  }
	}
	// no assignment group averages reported in email grades
	srString += line + "\n";
      }
    }
    // suppress raw scores after final exam grade has been entered
    if (groupSize[groupCount]==0){  
      srString += "Raw Scores: ";
      for (int i=1; i<=groupCount; i++){
	for (int j=1; j<=groupSize[i]; j++){
	  srString += Integer.toString(score[i][j]) + " ";
	}
      }
      srString += "\n";
    }
    srString += comments;
    srString = srString.trim();
    return srString;
  }


  // write string for PUBLIC grade report output (posted report)
  public String writePostReport(AssignmentList a){
    String srString = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;
    
    // make local copies of data needed
    String[] groupName = a.getGroupName();
    int groupCount = a.getGroupCount();
    int[] groupSize = a.getGroupSize();

    if (idNumber.length() < 4){
      line = "ID:  " + idNumber;
    }
    else{
      line = "ID:  " + idNumber.substring(idNumber.length()-4);
    }
    splitLoc = line.length();
    line += "Ave & Grade: ";
    mark = line.lastIndexOf(":");
    if (outOfOne[0][0] < 1.0){
      line += " ";
    }
    if (outOfOne[0][0] < 0.1){
      line += " ";
    }
    line += Integer.toString(ClassStats.round(outOfOne[0][0]*100))
                + "  " + letterGrade + "\n";
    line = TextUtil.justify(line, splitLoc, mark,
			     GradeBook.getOutputCols() -4);
    srString += line;

    for (int i=1; i<=groupCount; i++){
      line = "";
      // modified 11/2006
      // suppress lines for Final Exams with zero weight,
      // but show other groups with zero weight
      if (groupSize[i] > 0 && ( (a.getGroupWeight()[i] > 0) || (i<groupCount))){
	line += groupName[i] +"(%): ";
	for (int j=1; j<=groupSize[i]; j++){
	  if (outOfOne[i][j] < 0){
	    line += "N/A ";
	  }
	  else if (GradeBook.dropLowest()
		   && (i == dropGroupNumber) && (j == dropItemNumber)){
	    line +=
	      Integer.toString(ClassStats.round(outOfOne[i][j]*100)) +
	      "(drop) ";
	  }
	  else {
	    line += Integer.toString(ClassStats.round(outOfOne[i][j]*100)) + " ";
	  }
	}
	splitLoc = line.length();
	line += groupName[i] + " Ave: ";
	mark = line.lastIndexOf(":");
	if (outOfOne[i][0] >= 0){
	if (outOfOne[i][0] < 1.0){
	  line += " ";
	}
	if (outOfOne[i][0] < 0.1){
	  line += " ";
	}
	}
	if (outOfOne[i][0] < 0){
	  line += "N/A\n";
	}
	else{	
	line +=  Integer.toString(ClassStats.round(outOfOne[i][0]*100)) + "\n";
	}
	line = TextUtil.justify(line, splitLoc, mark,
				 GradeBook.getOutputCols()-4);
	srString += line;
      }
    }
    // suppress raw scores  if final exam grade has been entered
    if (groupSize[groupCount]==0){  
      srString += "Raw Scores: ";
      for (int i=1; i<=groupCount; i++){
	for (int j=1; j<=groupSize[i]; j++){
	  srString += Integer.toString(score[i][j]) + " ";
	}
      }
    }
    
    srString = srString.trim();

    if (idNumber.substring(idNumber.length()-4,idNumber.length()).equals("PRIV")){
      return "PRIV";
    }
    else {
      return srString;
    }
  }
  
  public String updateInputFile(AssignmentList a){
    String updateString = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;

    line = idNumber;
    splitLoc = line.length();
    line += name;
    mark = splitLoc;
    line = TextUtil.justify(line, splitLoc, mark, 12);
    updateString += line + "\n";

    for (int i=1; i<= a.getGroupCount(); i++){
      if (a.getGroupSize()[i] >0){
      line = a.getGroupName()[i];
      splitLoc = line.length();
      line += " ";
      mark = line.length();
      line = TextUtil.justify(line, splitLoc, mark, 25);
      for (int j=1; j<=a.getGroupSize()[i]; j++){
	splitLoc = line.length();
	line += Integer.toString(score[i][j]);
	mark = line.length();
	line = TextUtil.justify(line, splitLoc, mark, splitLoc + 4);
      }
      updateString += line + "\n";
      }
    }
    updateString += comments;
    return updateString;
  }
    
}

/* ******************************************************
   To Do notes

   split off calculations into tally() method?
   ****************************************************** */






