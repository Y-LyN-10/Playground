'use strict';

{
  let crypto    = require('crypto');
  let path      = require('path');
  let fs        = require('fs');
  
  let mode      = process.argv[2]; // encrypt or decrypt
  let filePath  = process.argv[3];
  let rootDir   = process.cwd() + '/';
  let fileDir   = path.normalize(rootDir + path.dirname(filePath) + '/');
  let fileName  = path.basename(filePath);

  let algorithm = 'aes-256-ctr';
  let password  = process.argv[4] || '1234';
  
  console.log({mode, fileName});

  if(!fileName || !mode){
    console.log(`Error: One or more arguments are missing`);
    process.exit(0);
  } else if(fs.accessSync(fileDir)){
    console.log(`Error: ${fileName} is not found or does not exist`);
    process.exit(0);
  }

  switch(mode) {
    case 'encrypt':
      readFile(fileName, encrypt); break;
    case 'decrypt':
      readFile(fileName, decrypt); break;
    default:
      console.log(`Error: ${mode} mode is not supported`); 
      process.exit(0);
  }
  
  function readFile(fileName, cb){
    fs.readFile(fileDir + fileName, 'utf8', function(err, data){
      if(err) throw err;
      cb(data);
    });
  }
  
  function encrypt(data){ 
    let cipher = crypto.createCipher(algorithm, password);
    let crypted = cipher.update(data, 'utf8','hex');
        crypted += cipher.final('hex');
    
    saveFile(rootDir + 'encrypted/', crypted);
  }

  function decrypt(data){
    let decipher = crypto.createDecipher(algorithm, password);
    let dec = decipher.update(data,'hex','utf8');
        dec += decipher.final('utf8');

    saveFile(rootDir  + 'decrypted/', dec);
  }

  function saveFile(dir, text){
    fs.writeFile(dir + fileName, text, finishProgram);
  }
  
  function finishProgram(err, data){
    if(err) throw err;
    console.log('Finished in', process.uptime(), 'seconds');
    process.exit(0);
  }
}

