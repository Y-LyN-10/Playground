#include <iostream>
#include <limits>

using namespace std;

int main(){
  
  int n, sum;
  int product = 1;

  // Read input
  cin >> n;

  // Validation
  while (cin.fail() || n <= 0) {
    cout << "You should enter a positive integer" << endl;

    // clears the error flag on cin (so that future I/O operations will work correctly)
    cin.clear();
    
    // ignores all the characters and the new line
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    cin >> n;
  }
 
  // The trivial solution
  do {
    sum += n % 10;
    product *= n % 10;
    n /= 10;
  } while(n > 0);

  // Print the result
  cout << sum << endl;
  cout << product << endl;
  
  //return 0;
}
