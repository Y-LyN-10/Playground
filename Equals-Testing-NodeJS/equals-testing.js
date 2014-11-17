'use strict';

var solution = require('./solution-to-test.js'),
    testReader = require('./test-reader.js'),
    colors = require('colors');

testReader(function (data) {
    data.testKeys.forEach(function (key) {
        var testData = data.input[key];

        var expected = data.output[key];
        var testResult = solution(testData);
        var testPassed = (expected === testResult);

        if(testPassed){
            var msg = '(OK) - Test ' + key + ' passed';
            console.log(msg.green.bold);
        } else {
            var msg = '(FAIL) - Test ' + key + ' failed';
            console.log(msg.red.bold);

            console.log('Expected:'.yellow);
            console.log(expected);

            console.log('Your output:'.yellow);
            console.log(testResult);

            console.log('input was:'.yellow);
            console.log(testData);
        }
    });
});
