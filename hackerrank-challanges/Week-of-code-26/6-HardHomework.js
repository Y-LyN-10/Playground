function processData(input) {
    var n = parseInt(input);
    var maxSum = 0;
    var sinSum = 0;
    var x, y, z = 1;
    
    // Try the worst fisrt. And last xD
    for (x = 1;x < n; x += 1) {
        for (y = 1; y < n; y += 1) {
            for (z = 1; z < n; z += 1) {
                if((x + y + z) == n) {
                    sinSum = (Math.sin(x) + Math.sin(y) + Math.sin(z)).toFixed(9);  
                    // console.log(parseFloat(sinSum) > parseFloat(maxSum));
                    if(parseFloat(sinSum) > parseFloat(maxSum)) {
                        maxSum = sinSum;
                    }
                }
            }
        }
    }
    
    console.log(maxSum);
  
    // Results for this terrible solution:
    // 17 test cases pass
    // 12 test cases fail with timeout
} 

// Ignore the lines below

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
