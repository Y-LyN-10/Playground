#include <iostream>

using namespace std;

int evenSum = 0;
int oddSum = 0;

int evenSumMinusOddSum(int *arr, int n, int i = 0){
  // The bottom of the recursion
  if(i == n){
    return evenSum - oddSum;
  }

  // add index to track the function
  if(i % 2 == 0){
    evenSum += arr[i];
  } else {
    oddSum += arr[i];
  }
  
  evenSumMinusOddSum(arr, n, ++i);
}

int main(){
  int n;
  cin >> n;
  
  int arr[n];
  
  for(int i = 0; i < n; i++){
    cin >> arr[i];
  }

  cout << evenSumMinusOddSum(arr, n) << '\n';
}
