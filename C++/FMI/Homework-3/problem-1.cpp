#include <iostream>
#include <algorithm> // is_sorted()

using namespace std;

// Variant I - sort all numbers and check if the array is changed (so, it changed). (Note: not the most efficient way due to performance)
// Variant II - write some function with a loop and break / (return -1) when the condition is not satisfied
// Variant III - The same, but use predicates to make the code more readable for humans
// Variant IV - Use <Iterator> instead of simple loop?
// Variant V - Recursion! Because... everything can be solved with recursion, lol
// Variant VI - Use the <algorithm> library (what I will do) :)

int main(){
  
  string input;
  cin >> input;

  int len = input.length();
  int digits[len];
  
  for(int i = 0; i < len; i++){
    digits[i] = input[i];
  }

  string result = is_sorted(digits, digits + len) > 0 ? "Yes" : "No";
  cout << result << '\n';
}
