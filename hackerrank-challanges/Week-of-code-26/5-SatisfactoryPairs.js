function processData(input) {
    // var start = process.hrtime();
    
    var c = parseInt(input);
    var a, b;
    var counter = 0;
    
    // check how much I suck. These tests won't pass anyway
    if(c >= 100000) {
        throw "";
    }
    
    /*
        So, Linear Diophantine Equations...
        ax + bx = c
        
        The Algorithm:
        Loop over all possible combinations of a < b, where a + b <= c
        Find the greatest common divisor (optimized)
        Search for a positive integer solution
        increment the counter if any
    */
    
    execute(1, c);
    var i;
    
    function execute(start, c) {    
        for(a = start; a < c - 1; a+=1) {
            for(b = a + 1; b <= (c - a); b+=1) {
                for (i = c; i >= 0; i-=a) {
                    if ((i % b) == 0) {
                        // There is a solution. Check if has positive
                        /*
                            ax + by = c
                            ax = c - by
                            x = (c - by)/a
                            x > 0 ? 
                        */

                        var x = 1;
                        var z = 1;
                        var dividend;
                        while(x > 0){
                            dividend = c - b * z;
                            if (dividend % a == 0) {
                                x = dividend / a;
                                // z += a;
                                if(x > 0){
                                    // Debug
                                    // console.log(a, b);
                                    counter += 1;
                                    // at least one is required, so break it
                                    break;
                                }
                            } else {
                                z += 1;
                            }
                        }
                        
                        break;
                    }
                }
            }   
        }
    }
    
    // var end = process.hrtime();
    // console.log(end[0] - start[0]);
    
    // works for n <= 16000 under 10s (only)
    
    console.log(counter);
    
    // Results for this solution:
    // 11 test cases pass
    // 15 test cases fail with runtime error (devil)
    // 13 test cases fail with timeout
} 

// TODO: try node.js hack to execute in parallel
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
