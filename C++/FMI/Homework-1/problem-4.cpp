#include <iostream>
#include <math.h>

using namespace std;

// Nothing new here
int sumOfDigits(int n){
  int sum = 0;
  
  do {
    sum += n % 10;
    n /= 10;
  } while(n > 0);

  return sum;
}

bool isPrime (int n){
  if (n == 2) return true;
  if (n < 2 || n % 2 == 0) return false;

  // The "Naive" Method: Try all (odd) numbers up to (the root of) the number
  for(int i = 3; i <= sqrt(n); i+=2){
    if(n % i == 0) return false;
  }
  
  return true;
}

int main(){

  for(int i = 10; i < 100; i++) {
    // Maybe it's not the C++ way, but... i love it
    if(isPrime(sumOfDigits(i))){
      cout << i << " ";
    }
  }

  cout << endl;
}
