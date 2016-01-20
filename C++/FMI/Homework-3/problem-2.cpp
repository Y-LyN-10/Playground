#include <iostream>
#include <list>
#include <vector>

using namespace std;

int sum(int *numbers, int len){
  int sum = 0;
  
  for(int i = 0; i < len; i++){
    sum += numbers[i];
  }

  return sum;
}

int main(){

  const int ASCII_NUMBER_START = 48;
  
  // Read Input
  string input;
  vector<string> lines;
  
  while(getline(cin, input) && input.length() > 0){
    lines.push_back(input);
  }

  int rows = lines.size();
  int cols = lines[0].length();
  int matrix[rows][cols];

  // fill the matrix
  for(int i = 0; i < rows; i++){
    for(int j = 0; j < cols; j++){
       matrix[i][j] = lines[i][j] - ASCII_NUMBER_START;
    }
  }
                     
  int result = -1;
  
  // Iterate again to find the result
  for(int row = 0; row < rows; row++){
    int rowSum = sum(matrix[row], cols);
    
    for(int col = 0; col < cols; col++){
      if(matrix[row][col] == (rowSum - matrix[row][col])){
        result = row;
        break;
      }
    }
  }
  
  cout << result << '\n';
  
}
