function processData(input) {
    var lines = input.split('\n');
    
    var n = parseInt(lines[0]);
    var a = lines[1].split(' ').map(Number);
    var [m, hMin, hMax] = lines[2].split(' ').map(Number);
    a[n] = a[n-1] + hMax;
    
    a.splice(0, 0, a[0] - hMax);
    
    // debug
    // console.log('genre points', a);
    
    // let's walk
    var startingPoint = a[0];
    var walkedMiles = hMax;
    var i = 1;
    
    if(hMax >= m) {
        startingPoint = a[1] - m;
        walkedMiles = a[1] - startingPoint;
    }
    
    // debug
    // console.log('Starting point', startingPoint);
    if(walkedMiles == m) {
        // do nothing
    } else {
        while(walkedMiles <= m) {
            if(i > n){ break; }

            var hours = a[i+1] - a[i];

            // debug
            // console.log('next genre stop', a[i], 'for', hours , 'hours');

            if(hours >= hMin && (hours <= hMax || isLastPoint(hours, walkedMiles))) {
                walkedMiles += hours;

                // debug
                // console.log('Listening music for', hours, 'hours');
                // console.log('Total walked miles', walkedMiles);

                i+=1;
            } else {
                startingPoint += 1;
                i = findClosestGenre(startingPoint);

                if(a[i] - startingPoint < hMin){
                    i+=1;
                }

                walkedMiles = a[i] - startingPoint;

                // debug
                // console.log('--- Wrong path ---');
                // console.log('Starting point', startingPoint);
                // console.log('Closest genre on', a[i]);
            }        
        }
    }
    
    function isLastPoint(hours, miles) {
        // debug
        // console.log('Check if last point?', (m - miles) <= hMax);
        return (m - miles) <= hMax && (m - miles) >= hMin;
    }
    
    function findClosestGenre(position) {
        var i;
        for (i = 0; i < n; i += 1) {
            if(position >= a[i] && position <= a[i+1]){
                return i;
            }
        }
        
        return 0;
    }
    
    //result
    console.log(startingPoint);
    
    // Final result for this solution:
    // 11 test cases passing
    // 6  test cases failed with wrong answer
    // 5  test cases failed with timeout
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
