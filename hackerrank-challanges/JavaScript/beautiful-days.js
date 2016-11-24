function processData(input) {
    var [i, j, k] = input.split(' ').map(x => parseInt(x));
    var counter = 0;
    
    for(i; i <= j; i++) {
        if((i - reversed(i))%k === 0) counter++; 
    }
    
    console.log(counter);
    
    function reversed(n){
        return parseInt(n.toString().split('').reverse().join(''));
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
