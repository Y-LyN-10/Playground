'use strict';

/* This program reads all files from the 'files' directory, 
   concatenates them into one file and saves it to the file system */

{
  let fs = require('fs');
  let path = require('path');
  let filesDir = process.cwd() + '/files/';
  let allInOne = '';

  console.log(`${process.title} v.${process.versions.node} running on ${process.platform} ${process.arch}\n`);
  console.log(`Get all files from ${process.cwd()}\n`);

  fs.readdir(filesDir, function(err, files){
    if(err) throw err;

    // Not everything that takes a callback is asynchronous.
    // For example, .forEach is synchronous (as well every loop in JavaScript)

    files.forEach(function(file){
      if(!path.extname(filesDir + file)){
        console.log(`${file} is not a file`); // well, actually in unix dirs are files too
        return;
      }
      
      console.log('Open file', file);
      
      fs.readFile(filesDir + file, 'utf8', function (err, data) {
        if (err) throw err;

        fs.appendFile('allInOne.txt', data, function (err) {
          if (err) throw err;
          console.log(`file ${file} is ready`);
        });
      });
    });
    
    // Oops, heads up!

    /* That is what "everything runs in parallel except your code" means.
     .forEach is synchronous and this message shows up when the loop is done. 
     But the files are processing asynchronously and they are not ready yet! */
    
    console.log(`\nAll files content in one: ${allInOne ? allInOne : 'no such file yet'}\n`);
  });

  setTimeout(function(){
    console.log('\n2 seconds later\n');
  }, 2000);

  process.on('beforeExit', function(){
    console.log('fired "beforeExit" event:');
    // This event is emitted when Node.js empties its event loop and has nothing else to schedule.
    // So... our file allInOne should be ready! Let's check it out:

    fs.readFile('allInOne.txt', 'utf8', function (err, data) {
      if (err) console.log(err.msg);
      allInOne = data.replace(/(\r\n|\n|\r)/gm,'');
      console.log(`\nFile content: \n${allInOne ? allInOne : 'none'}`);

      // Wow! Finally. Now we can delete this file
      fs.unlink('./allInOne.txt', function (err) {
        if (err) console.log(err.msg);
        console.log('\nallInOne.txt is deleted');

        // Force program to exit
        process.exit();
      });
    });
  });
}
