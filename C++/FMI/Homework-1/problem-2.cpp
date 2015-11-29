#include <iostream>
#include <limits>

using namespace std;

// Validate by reference
bool validate(int* input){
  while (cin.fail() || *input <= 0) {
    cout << "You should enter a positive integer" << endl;
    cin.clear();
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    cin >> *input;
  }
}

int sumOfDivisors(int number){
  int sum = 0;

  for(int i = 1; i <= number/2; i++){
    if(number % i == 0) sum += i;
  }

  return sum;
}

int main(){
  int start;
  cin >> start;
  validate(&start);

  int end;
  cin >> end;
  validate(&end);

  int perfectNumber;

  // swap the numbers if needed
  if(start > end){
    int tmp = start;
    start = end;
    end = tmp;
  }
    
  for(int i = start; i < end; i++){
    bool isPerfect = sumOfDivisors(i) == i;
    
    if(isPerfect){
      cout << i << " ";
    }
  }

  cout << endl;
}
