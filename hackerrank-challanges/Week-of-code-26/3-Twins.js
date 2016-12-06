function processData(input) {
    var [n, max] = input.split(' ').map(Number);
    var primes = [];
    var number;
    
    for (number = n; number <= max; number+=1){
        if (isPrime(number)){
            primes.push(number);
        }
    }
    
    var pairsCounter = 0;
    var i, j;
    for (i = 0; i < primes.length; i+=1) {
        for(j = i+1; j < primes.length; j+=1) {
            if(isTwin(primes[i], primes[j])) {
                pairsCounter += 1;
                //console.log(primes[i], primes[j]);
            }
        }
    }
    
    console.log(pairsCounter);
    
    function isTwin(a, b){
        return Math.abs(b - a) == 2;
    }
    
    function isPrime(number) {
        if (number == 2) return true;
        if (number < 2 || number % 2 == 0) return false;
        
        for (var i = 3; i <= Math.sqrt(number); i+=2){
            if(number % i == 0) return false;
        }

        return true;
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
