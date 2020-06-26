package GBK2_10;
import GBK2_10.*;
import java.util.*;
import java.io.*;

/************************************************************
 * generate a random element of the permutation group on size symbols
 ************************************************************/
public class RandomPerm {

  public static int N = 10;
  
  public static void main(String[] args) {
    int size = N;
    int sizea=8;
    int sizeb=12;
    int[] testsplit = new int[8];
    int[] alpha = new int[size + 1];
    alpha = randomPerm(size);
    testsplit = randomPermSplit(sizea,sizeb);
    for (int i=1; i<=size; i++){
      System.out.print(alpha[i] + " ");
    }
    System.out.println("");
        for (int i=1; i<=sizea+sizeb; i++){
      System.out.print(testsplit[i] + " ");
    }
	    System.out.println("");
  }

  // add offset to each entry in array 
  public static int[] arrayOffset(int[] array, int offset){
    for (int i=0;i<array.length;i++){
      array[i]+=offset;
    }
    return array;
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

  // 9/2017 make a random permutation in S_m \times S_{n-m}
  //  for multi-section courses
  //     sizea, sizeb are sizes of the two sections
  public static int[] randomPermSplit(int sizea, int sizeb){
    int[] alpha = new int[sizea + sizeb + 1];
    int[] alpha1 = new int[sizea + 1];
    int[] alpha2 = new int[sizeb + 1];    
    alpha1 = randomPerm(sizea);
    alpha2 = arrayOffset(randomPerm(sizeb),sizea);
    for (int i=1;i<=sizea;i++){
      alpha[i]=alpha1[i];
    }
    for (int i=sizea+1;i<=sizea+sizeb;i++){
      alpha[i]=alpha2[i-sizea];
    }
    return alpha;
  }

}

