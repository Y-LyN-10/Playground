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
    process.exit();
  } else if(fs.accessSync(fileDir)){
    console.log(`Error: ${fileName} is not found or does not exist`);
    process.exit();
  }

  let data = fs.readFileSync(fileDir + fileName, 'utf8');

  switch(mode) {
    case 'encrypt':
      let encrypted = encrypt(data);
      fs.writeFileSync(rootDir + 'encrypted/' + fileName, encrypted);
      console.log(`The file is successfully encrypted and saved to ./encrypted/${fileName}`);
      break;
    
    case 'decrypt':
      let decrypted = decrypt(data);
      fs.writeFileSync(rootDir + 'decrypted/' + fileName, decrypted);
    console.log(`The file is successfully decrypted and saved to ./decrypted/${fileName}`);
    
      break;
    
    default:
      console.log(`Error: ${mode} mode is not supported`); 
      process.exit();
  }
  
  function encrypt(data){ 
    let cipher = crypto.createCipher(algorithm, password);
    let crypted = cipher.update(data, 'utf8','hex');
        crypted += cipher.final('hex');

    return crypted;
  }

  function decrypt(data){
    let decipher = crypto.createDecipher(algorithm, password);
    let dec = decipher.update(data,'hex','utf8');
        dec += decipher.final('utf8');

    return dec;
  }

  console.log('Finished in', process.uptime(), 'seconds');
  process.exit();
}

