//import readline lib
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,output :process.stdout})

const qr = require('qrcode-terminal');

rl.question("Enter the text to generate a QR code: ",(userInput)=>{
  console.log(`okey so you want to genrate qr code of ${userInput}`);
  const result = qr.generate(userInput,{small : true});
  console.log(result);
  rl.close();
})

