using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution { 
    public static void insertionSort (int[] A) { 
        var j = 0; 
        for (var i = 1; i < A.Length; i++) { 
            var value = A[i]; 
            j = i; 
            while (j > 0 && value < A[j - 1]) { 
                A[j] = A[j - 1];
                j = j - 1; 
            } 
            A[j] = value; 
        } 
        Console.WriteLine(string.Join(" ", A)); 
    }

    static void Main(string[] args) { 
        Console.ReadLine(); 
        int [] _ar = (from s in Console.ReadLine().Split() select Convert.ToInt32(s)).ToArray();
        insertionSort(_ar); 
    }
}
