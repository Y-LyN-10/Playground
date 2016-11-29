function processData(input) {
  var lines = input.split('\n');
  var n = parseInt(lines[0]);
  var arr = lines[1].split(' ').map(x => parseInt(x));
  var e = parseInt(arr.splice(n-1)[0]);
  
  var i;
  for(i = n-1; i >= 0; i -= 1) {
    arr[i] = arr[i-1];

    // insert in the right position and break
    if(arr[i-1] < e || i == 0) {
      arr[i] = e;
      console.log(arr.join(' '));
      break;
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
