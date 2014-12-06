'use strict';

var fs = require('fs'),
    path = require('path'),
    testsDir = './tests',
    os = require('os'),
    testFiles = fs.readdirSync(testsDir);

var inputTests = {},
    outputTests = {},
    testKeys = [];

function getAllTests(cb) {
    testFiles.forEach(function (file, index) {
        var test = [];
        var filePath = testsDir + '/' + file;

        var input = fs.createReadStream(filePath);
        readLines(input);

        function readLines(input) {
            var remaining = '';

            input.on('data', function (data) {
                remaining += data;
                var index = remaining.indexOf(os.EOL);
                var last = 0;
                while (index > -1) {
                    var line = remaining.substring(last, index);
                    last = index + 1;
                    test.push(line.trim());
                    index = remaining.indexOf(os.EOL, last);
                }

                remaining = remaining.substring(last);
            });

            input.on('end', function () {
                if (remaining.length > 0) {
                    test.push(remaining.trim());

                    var testWithExtension = path.basename(file, '.txt');

                    var testNumber = path.basename(testWithExtension, '.in');
                    testNumber = path.basename(testNumber, '.out');
                    testNumber = testNumber.split('.').slice(1).join('');

                    if (path.extname(testWithExtension) === '.in') {
                        inputTests[testNumber] = test;
                        testKeys.push(testNumber);
                    } else {
                        outputTests[testNumber] = test.join(os.EOL);
                    }
                }
                if (index === testFiles.length - 1) {
                    cb({
                        input: inputTests,
                        output: outputTests,
                        testKeys: testKeys
                    });
                }
            });
        }
    });
}

module.exports = getAllTests;