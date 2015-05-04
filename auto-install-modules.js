#! /usr/bin/env node

var exec = require('child_process').exec,
    command = 'gulp',
    regExp = /\'([^']+)\'/,
    child;

if (!command) {
    console.log('Argument expected');
    process.exit();
}

executeCommand(command);

function executeCommand(command){

    child = exec(command, function (error, stdout, stderr) {
        if(error){
            var missingModule = regExp.exec(error)[0].replace(/\'/g,'');
            var installCommand = 'npm i ' + missingModule + ' --save';

            console.log('Missing module:', missingModule);
            console.log('Install...');

            exec(installCommand, function (error, stdout, stderr) {
                if(error) {
                    console.log(error);
                    process.exit(1);
                }

                console.log(stdout);
                console.log(stderr);

                console.log('Done.');
                executeCommand(command);
            });
        }
    });

    child.stdout.on('data', function(data) {
        console.log('Finished');
        process.exit();
    });
}

