#include <iostream>

using namespace std;

// Trivial solution

bool contains(int k, int n){
  if(k == n || n % 10 == k){
    return true;
  } else if (n < 10){
    return false;
  } else {
    contains(k, n/10);
  }
}

int main(){
  int n, k = 0;

  cin >> n;
  cin >> k;

  cout << contains(k, n) << '\n';
}
