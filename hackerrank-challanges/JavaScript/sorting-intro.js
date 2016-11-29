function processData(input) {
  var lines = input.split('\n');
  var v = parseInt(lines[0]);
  var arr = lines[2].split(' ').map(Number);
  
  // check how the data looks-like
  console.log(arr.indexOf(v));
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
