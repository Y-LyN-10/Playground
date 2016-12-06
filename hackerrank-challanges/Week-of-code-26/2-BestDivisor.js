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
    var n = parseInt(readLine());
    var divisors = factorize(n);
  
    var sumsOfDivisorDigits = divisors
      .map(x => x
         .toString()
         .split('')
         .map(y => parseInt(y))
         .reduce((a, b) => a + b));
  
    var max = Math.max.apply(null, sumsOfDivisorDigits);
    
    console.log(divisors[sumsOfDivisorDigits.indexOf(max)]);
  
    function factorize(n) {
      var factors = [], i;
      for(i = 1; i <= n; i += 1) {
        if(n % i == 0) {
          factors.push(i);
        }
      }
      
      return factors; 
    }
}
