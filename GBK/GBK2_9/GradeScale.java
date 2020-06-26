package GBK2_9;
import GBK2_9.*;
import java.util.*;
import java.io.*;

/****************************************************************
 * Gradescale object holds letter grade names ("A", "B", etc) and
 * lower bound cut off scores (in percent) for each

 * To assign excpetional grades, for example I for Incomplete, add a
 * line with this format in the input file

 *  Exceptions idstring1 I idstring2 U (etc)
 ****************************************************************/
public class GradeScale {

  private final static int MAX_LETTER_GRADES = 50;
  private final static int MAX_EXCEPTION_GRADES = 50;

  private int          letterGradeCount;
  private String[]     letterGradeName;
  private int[]        cutOff;
  private int          exceptionCount;
  private String[]     exceptionIdNumber;
  private String[]     exceptionLetterGrade;

  // accessor methods

  public int          getLetterGradeCount()  {return this.letterGradeCount;}
  public String[]     getLetterGradeName()   {return this.letterGradeName;}
  public int[]        getCutOff()            {return this.cutOff;}
  public int          getExceptionCount()    {return this.exceptionCount;}
  public String[]     getExceptionIdNumber() {return this.exceptionIdNumber;}
  public String[]     getExceptionLetterGrade()   {return this.exceptionLetterGrade;}

  // cut offs should be a decreasing sequence with last element 0

  // constructor
  public GradeScale(String a){

    letterGradeCount = 0;
    letterGradeName = new String[MAX_LETTER_GRADES];
    cutOff          = new    int[MAX_LETTER_GRADES];
    exceptionCount = 0;
    exceptionIdNumber = new String[MAX_EXCEPTION_GRADES];
    exceptionLetterGrade = new String[MAX_EXCEPTION_GRADES];

    String line = "";
    
    try{
      BufferedReader b = new BufferedReader(new StringReader(a));
      // first line is letter grades and cut off scores
      line = b.readLine();
      String currentWord = "";
      StringTokenizer t = new StringTokenizer(line);
      while(t.hasMoreTokens()){
	letterGradeCount++;
	letterGradeName[letterGradeCount] = t.nextToken();
	if (!t.hasMoreTokens()){
	  System.out.println("Bad data format for grade scale.\n" + a);
	  System.exit(0);
	}
	try{
	  cutOff[letterGradeCount] = Integer.parseInt(t.nextToken());
	}
	catch(NumberFormatException e){
	  System.out.println("Grade scale cut off score has bad format");
	  System.out.println("for grade " +
			     letterGradeName[letterGradeCount]);
	  System.exit(0);
	}
      }
      if (cutOff[letterGradeCount] != 0){
	System.out.println("Last cut off score in grade scale must be zero");
        System.exit(0);
      }
      if ((line = b.readLine()) != null){
	if (line.indexOf("Exceptions") != 0){
	  System.out.println("Bad data format in grade scale\n"
			     + "line after letter grades and cut off scores"
			     + "must begin with \"Exceptions\"");
	  System.exit(0);
	}
	t = new StringTokenizer(line);
	// throw away "Exceptions" at beginning of line
	t.nextToken();
	while (t.hasMoreTokens()){
	  exceptionCount++;
	  exceptionIdNumber[exceptionCount] = t.nextToken();
	  if (!t.hasMoreTokens()){
	    System.out.println("Bad data format for grade exceptions.\n" + line);
	    System.exit(0);
	  }
	  exceptionLetterGrade[exceptionCount] = t.nextToken();
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
    String gsString = "";
    gsString += "Grade Scale: letter grades and lower cut off scores\n";
    for (int i=1; i<= letterGradeCount; i++){
      gsString += letterGradeName[i] + " " + cutOff[i] + " ";
    }
    if (exceptionCount > 0){
      gsString += "\nExceptions ";
      for (int i=1; i<= exceptionCount; i++){
	gsString += exceptionIdNumber[i] + " " + exceptionLetterGrade[i] + " ";
      }
    }
    gsString = gsString.trim();
    return gsString;
  }

  // write string for grade report output
  public String writePostReport(AssignmentList a){
    String gsString = "";
    if (a.getGroupSize()[a.getGroupCount()] > 0){
      gsString += "Grade Scale: letter grades and lower cut off scores\n";
    }
    else {
      gsString += "Grade Scale (subject to change): ";
      gsString += "letter grades and lower cut off scores\n";
    }
    for (int i=1; i<= letterGradeCount; i++){
      gsString += letterGradeName[i] + " " + cutOff[i] + " ";
    }
    gsString = gsString.trim();
    return gsString;
  }

}

/* ******************************************************
   To Do notes
   ****************************************************** */
