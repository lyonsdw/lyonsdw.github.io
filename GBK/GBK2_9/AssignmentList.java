package GBK2_9;
import GBK2_9.*;
import java.util.*;
import java.io.*;

/*********************************************************************
 * AssignmentList object holds data for assignments including names of
 * assignments, weights and point values.  Assignments are organized
 * into groups (for example "Homework", "Quiz", "Exam", etc) and items
 * in each group are labeled by an item number.  Array pointValue[][]
 * holds total point value for assignment group i, item j.  
 *********************************************************************/
public class AssignmentList {

  private final static int MAX_GROUP_COUNT = 20;
  private final static int MAX_GROUP_SIZE = 50;

  private String[]     groupName;    
  private int          groupCount;
  private int[]        groupSize;
  private int[]        groupWeight;         // nonnegative integers
  private int          totalWeight;
  private int[][]      pointValue;          // positive integers

  // accessor methods

  public String[]     getGroupName()       {return this.groupName;}
  public int          getGroupCount()      {return this.groupCount;}
  public int[]        getGroupSize()       {return this.groupSize;}
  public int[]        getGroupWeight()     {return this.groupWeight;}
  public int          getTotalWeight()     {return this.totalWeight;}
  public int[][]      getPointValue()      {return this.pointValue;}

  // check that data is valid and consistent
  // point values positive?
  // weights non negative?

  public void incrementGroupSize(int enterGroup){
    groupSize[enterGroup]++;
  }

  public void setPointValue(int enterGroup, int enterItem, int newPointValue){
    pointValue[enterGroup][enterItem] = newPointValue;
  }

    
  // constructor
  public AssignmentList(String a){

    // initialize instance variables
    groupCount = 0;
    totalWeight = 0;
    groupName = new String[MAX_GROUP_COUNT];
    groupSize = new int[MAX_GROUP_COUNT];
    groupWeight = new int[MAX_GROUP_COUNT];
    pointValue = new int[MAX_GROUP_COUNT][MAX_GROUP_SIZE];

    groupSize[0] = 1;
    String currentWord = "";

    try{
      BufferedReader b = new BufferedReader(new StringReader(a));

      String line = "";
      int wtStartPos = 0;
      int wtEndPos = 0;
      String nameWtString= "";
    
      // each line is a group name, group weight, then list of point
      // values for individual assignments
      // first break the line at "%" (marks the end of the group weight),
      // read the name and weight, then tokenize the part of the line
      // after "%" and read the point values
      while ((line = b.readLine()) != null){
	groupCount++;
	if (groupCount >= MAX_GROUP_COUNT){
	  System.out.println("Too many assignment groups.");
	  System.exit(0);
	}
	groupSize[groupCount] = 0;
	wtEndPos = line.indexOf("%");
	if (wtEndPos < 0){
	  System.out.println("line is "+ line);
	  System.out.println("No weight found for assignment group " +
			     groupCount);
	  System.exit(0);
	}
	nameWtString = line.substring(0, wtEndPos);
	wtStartPos = nameWtString.lastIndexOf(" ");
	groupName[groupCount] =
	  nameWtString.substring(0,wtStartPos).trim();
	groupWeight[groupCount] =
	  Integer.parseInt(nameWtString.substring(wtStartPos + 1,
						  wtEndPos));
	totalWeight += groupWeight[groupCount];

	// tokenize the part of the line after "%" the read the point
	// values for individual assignments in the group

	StringTokenizer t = new StringTokenizer(line.substring(wtEndPos +
							       1));
	String newScoreString = "";
	while (t.hasMoreTokens()){
	  newScoreString = t.nextToken();
	  if (!Character.isDigit(newScoreString.charAt(0))){
	    System.out.println("Bad score data in " +
			       groupName[groupCount]+ " assignment group.");
	    System.exit(0);
	  }
	  groupSize[groupCount]++;
	  if (groupSize[groupCount] >= MAX_GROUP_SIZE){
	    System.out.println("Too many items in assignment group " + groupName[groupCount]);
	    System.exit(0);
	  }
	  pointValue[groupCount][groupSize[groupCount]] =
	    Integer.parseInt(newScoreString);
	}
      }
      b.close();
    }
    catch (IOException e){
      System.out.println("Error reading string reader for\n" + a);
    }
  }

  // write string for grade report output
  public String writeGradeReport(){
    String aString = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;

    line += "Assignments: group name, group item point value(s), group weight";
    /*
    splitLoc = line.length();
    line += "Total Weight: ";
    mark = line.lastIndexOf(":");
    if (totalWeight < 100){
      line += " ";
    }
    if (totalWeight < 10){
      line += " ";
    }
    line += totalWeight + "\n";
    line = TextUtil.justify(line, splitLoc, mark,
			     GradeBook.getOutputCols() - 4);
    */
    
    aString += line + "\n";
    
    for (int i=1; i<=groupCount; i++){
      line = "";
      line += groupName[i] + ": ";
      /*
	+ " (approx "
	+
	ClassStats.round(((double)groupWeight[i])/((double)totalWeight) * 100)
	+ "%)\t");
      */
      for (int j=1; j<=groupSize[i]; j++){
	line += pointValue[i][j] + " ";
      }
      splitLoc = line.length();
      line += groupName[i] + " Wt: "
	+ groupWeight[i] + "/" + totalWeight + "\n";
      mark = line.lastIndexOf(":");
      line = TextUtil.justify(line, splitLoc, mark,
			      GradeBook.getOutputCols() - 4);
      aString += line;
    }
      
    aString = aString.trim();
    return aString;
  }

  // write string for grade report output, final public posted version
  //   omits point values for assignments
  //  public String writeFinalPostedGradeReport(){
  public String writePostedGradeReport(){  // make necessary changes where called
    String aString = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;

    line += "Assignments: group name, group weight";
    
    aString += line + "\n";

    // do this loop before final exam grade is entered
    //   this shows the raw point value of each assignment
    if (groupSize[groupCount] == 0){
      for (int i=1; i<=groupCount; i++){
	// do not list final exam if its weight is zero
	//  modification 11/2006 but show other groups with zero weight
	if (groupWeight[i] != 0 || i<groupCount){ 
	  line = "";
	  line += groupName[i] + ": ";
	  for (int j=1; j<=groupSize[i]; j++){
	    line += pointValue[i][j] + " ";
	  }
	  splitLoc = line.length();
	  line += groupName[i] + " Wt: "
	    + groupWeight[i] + "/" + totalWeight + "\n";
	  mark = line.lastIndexOf(":");
	  line = TextUtil.justify(line, splitLoc, mark,
				  GradeBook.getOutputCols() - 4);
	  aString += line;
	}
      }
    }

    // do this loop after final exam grade is entered
    //  this omits raw score value
    else {
      for (int i=1; i<=groupCount; i++){
	// do not list final exam if its weight is zero
	if (groupWeight[i] != 0){ 
	  line = ""; 
	  line += groupName[i] + " Wt: " 
	    + groupWeight[i] + "/" + totalWeight + "\n"; 
	  mark = line.lastIndexOf(":"); 
	  line = TextUtil.justify(line, mark-2, mark , 30); 
	  aString += line; 
	} 
      }
    }
      
    aString = aString.trim();
    return aString;
  }


    // write string 
  public String updateInputFile(){
    String updateString = "";
    String line = "";
    int splitLoc = 0;
    int mark = 0;
    
    for (int i=1; i<= groupCount; i++){
      line = groupName[i];
      splitLoc = line.length();
      line += groupWeight[i] + "%";
      mark = line.lastIndexOf("%");
      line = TextUtil.justify(line, splitLoc, mark, 25) + "  ";
      for (int j=1; j<= groupSize[i]; j++){
	splitLoc = line.length();
	line += Integer.toString(pointValue[i][j]);
	mark = line.length();
	line = TextUtil.justify(line, splitLoc, mark, splitLoc + 4);
      }
      updateString += line + "\n";
    }
    return updateString;
  }
}

/* *******************************************************
   To Do notes
  ******************************************************* */
