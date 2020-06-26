package GBK2_9;
import GBK2_9.*;
import java.io.*;
import java.util.*;

/************************************************************************
 *Class for formatting text output and reading formatted text input.
 *
 * author: David W. Lyons, lyons@lvc.edu
 *************************************************************************/
public class TextUtil {

  /***********************************************************************
   * extract lines of text occuring between
   *   "\begin{blockname}"     and     "\end{blockname}"
   * from the string dataString 
   ***********************************************************************/
  public static String getDataBlock(String dataString, String blockname){
    int startPos = dataString.indexOf("\\begin{"+blockname)
      + blockname.length() + 8;
    int endPos = dataString.indexOf("\\end{"+ blockname);
    if (startPos < 0 || endPos < 0){
      return "Data block name " + blockname + " not found";
    }
    return dataString.substring(startPos,endPos).trim();
  }

  /***********************************************************************
   * test argument string line to see if blank
   * return true if line has only whitespace characters
   ***********************************************************************/
  public static boolean isBlankLine(String line){
    for (int i=0; i<line.length(); i++){
      if (!Character.isWhitespace(line.charAt(i))){
	return (false);
      }
    }
    return (true);
  }

  /***********************************************************************
   * justify argument string line
   * text in line to left of position splitLoc stays left
   * text to right of position splitLoc moves right to move position
   *   mark to position toCol
   * if mark > toCol, start a new line, then justify
   ***********************************************************************/
  public static String justify(String line, int splitLoc, int mark, int
			       toCol){
    String newline = "";
    newline = line.substring(0,splitLoc);
    if ((toCol - mark) < 0){
      newline += "\n";
      //      mark = 0;
      // try a new mark 11/2006
      mark = mark - line.substring(0,splitLoc).length();
    }
    for (int i=1; i<= (toCol - mark); i++){
      newline += " ";
    }
    newline += line.substring(splitLoc);
    return newline;
  }

  /***********************************************************************
   * center argument string text in a line of width output_columns
   ***********************************************************************/
  public static String centerText(String text, int output_columns){
    return justify(text, 0, text.length()/2, output_columns/2);
  }

  /***********************************************************************
   * right justify argument string text in a line of width output_columns
   ***********************************************************************/
  public static String justifyRight(String text, int output_columns){
    return justify(text, 0, text.length()-1, output_columns);
  }

  /***********************************************************************
   * paginate argument string s for page with #rows = output_rows
   * insert formfeed (newpage) characters into s
   * so that output file has breaks only at blank lines in text
   ***********************************************************************/
  public static String paginateText(String s, int output_rows){
    // break string into paragraphs, count lines in each
    // while (there are more paragraphs)
    //   if (current paragraph length + number of lines on current page
    //         <= output_rows)
    //     add current paragraph to current page
    //     update current page length
    //   else insert formfeed and start new page

    String paginatedText = "";
    String newParagraph = "";
    String line = "";
    int currentPageLineCount = 0;
    int newParagraphLineCount = 0;

    try{
      BufferedReader b = new BufferedReader(new StringReader(s));
      while ((line = b.readLine()) != null){
	newParagraph += line + "\n";
	newParagraphLineCount ++;
	if (isBlankLine(line)){
	  if((newParagraphLineCount + currentPageLineCount) < output_rows){
	    paginatedText += newParagraph;
	    currentPageLineCount += newParagraphLineCount;
	  }
	  else if ((newParagraphLineCount + currentPageLineCount)
		   == output_rows){
	    paginatedText += newParagraph;
	    currentPageLineCount = 0;
	  }
	  else {
	    /* kill the form feed 10/2006 */
	    /*
	    paginatedText += "\f" + newParagraph;
	    */
	    paginatedText += newParagraph;
	    currentPageLineCount = newParagraphLineCount%output_rows;
	  }
	  newParagraph = "";
	  newParagraphLineCount = 0;
	}
      }
      paginatedText += newParagraph;
      b.close();
    }
    catch (IOException e){
      System.out.println("Error in method paginateText() reading"
        + "StringReader for \n" + s);
      System.exit(0);
    }
    return paginatedText;
  }

}

/* ***************************************************************************
   Development notes:


   ************************************************************************** */
									     
