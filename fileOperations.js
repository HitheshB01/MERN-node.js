const fs = require('fs');
const path = require('path');
const os = require('os');

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.cpus());
// console.log(os.networkInterfaces());


// fs.writeFile('sample.txt','hello world','utf8',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file created")
//     }
// })

// fs.appendFile('sample.txt','this is a new line','utf8',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file updated")
//     }
// })

// fs.readFile('sample.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// fs.unlink('sample.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file deleted")
//     }
// })