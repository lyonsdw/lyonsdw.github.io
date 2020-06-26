package GBK2_9;
import GBK2_9.*;
import java.util.*;
import java.io.*;

/************************************************************
 * generate a random element of the permutation group on size symbols
 ************************************************************/
public class RandomPerm {

  public static int N = 10;
  
  public static void main(String[] args) {
    int size = N;
    int[] alpha = new int[size + 1];
    alpha = randomPerm(size);
    for (int i=1; i<=size; i++){
      System.out.print(alpha[i] + " ");
    }
    System.out.println("");
    
  }

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

}

