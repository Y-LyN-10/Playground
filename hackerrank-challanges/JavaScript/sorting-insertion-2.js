function processData(input) {
  var lines = input.split('\n');
  var n = parseInt(lines[0]);
  var arr = lines[1].split(' ').map(Number);
  
  var i, j, e;
  for(i = 1; i < n; i += 1) {
    e = arr[i];
    for(j = i; j >= 0; j -= 1) {
      arr[j] = arr[j-1];

      // insert in the right position and break
      if(arr[j-1] < e || j == 0) {
        arr[j] = e;
        break;
      }
    }
    
    console.log(arr.join(' '));
  }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
