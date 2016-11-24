#include <vector>
#include <iostream>

using namespace std;


int main(){
    int n;
    cin >> n;
    vector<int> arr(n);
    
    for(int arr_i = 0;arr_i < n;arr_i++){
        cin >> arr[arr_i];
    }
  
    for(int arr_j = n-1; arr_j >= 0; arr_j--){
        cout << arr[arr_j] << ' ';
    }
  
    return 0;
}
