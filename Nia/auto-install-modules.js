#! /usr/bin/env node

var exec = require('child_process').exec,
    args = process.argv.slice(2),
    command = args.join(' '), child,
    regExp = /(?:^|\s)Cannot find module (.*?)(?:\s|$)/;

if (!command) {
    console.log('Argument expected - command or script name');
    process.exit(9);
}

executeCommand(command);

function executeCommand(command){
    child = exec(command, function (error, stdout, stderr) {
        if(error){
            var match = regExp.exec(error);

            if (match) {
                var missingModule = match[1].replace(/^\s*[\r\n]/gm, '').replace(/\'/g, '');
                var installCommand = 'npm install ' + missingModule + ' --save';

                console.log('Missing module:', missingModule);
                console.log('Install...');

                exec(installCommand, function (error, stdout, stderr) {
                    if (error) {
                        console.log(error);
                        process.exit(1);
                    }

                    console.log(stdout);
                    console.log(stderr);

                    executeCommand(command);
                });
            } else {
                // No missing modules found, but there is another error
                console.log(stderr);
                process.exit(1);
            }
        }
    });
}