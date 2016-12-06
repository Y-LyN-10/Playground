using System;

public class Solution 
{
    private static int CountConsecutiveOnes(string binaryString)
    {	    
		int counter = 0;
		int maxCount = 0;
		
		for (int i = 0; i < binaryString.Length; i++)
    	{	
			if(binaryString[i] == '1'){
				counter++;
			} 
		
			if(counter > maxCount) {
				maxCount = counter;
			}
		
			if(binaryString[i] == '0') {
				counter = 0;
			}
        }

		return maxCount;	
    }
    
    public static void Main(String[] args) 
    {
        int n = Convert.ToInt32(Console.ReadLine());
        
		string binaryN = Convert.ToString(n, 2);
			
		int result = CountConsecutiveOnes(binaryN);

		Console.WriteLine(result);
    }
}
