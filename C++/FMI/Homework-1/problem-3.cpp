#include <iostream>
#include <limits>

using namespace std;

// a predicate implemented as a function:
bool isNegative (const int& value) { return (value < 0); }

int main(){
  int n, negatives;

  cin >> n;
  
  while (cin.fail() || n <= 0) {
    cout << "You should enter a positive integer" << endl;
    cin.clear();
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    cin >> n;
  }

  // There is absolutely no point (and not effective!) to keep all the values in array just to count how many negative numbers it contains... so I won't do that. Keep it simple.

  for(int i = 0; i < n; i++){
    int x; cin >> x;
    if(isNegative(x)) ++negatives;
  }

  cout << negatives << endl;
}
