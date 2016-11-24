process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);
    
    // to find the sums -> sum all the five numbers
    // for min sum - subtract the max number
    // for max sum - subtract the min number
    
    var sum = a + b + c + d + e;
    var minSum = sum - Math.max(a, b, c, d, e);
    var maxSum = sum - Math.min(a, b, c, d, e);
    
    console.log(minSum, maxSum);

}
