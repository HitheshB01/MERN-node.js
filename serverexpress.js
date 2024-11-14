const express = require('express');
const app = express();
const port = 3000;
//instead of using http we are using express
//instead of using res.write and res.end we are using res.send
//instead of using if else we are using direct get method

//CRUD operations
//read  ,create  ,update  ,delete
//get   ,post    ,put     ,delete



// app.get('/', (req, res) => {
//     res.send('Hello World! home page');
// }); 

// app.get('/about', (req, res) => {
//     res.send('Hello World! about page');
// }); 

// app.get('/contact', (req, res) => {
//     res.send('Hello World! contact page');
// });

// app.post('/contact', (req, res) => {
//     res.send('Hello World! contact page');
// }); 

// app.put('/contact', (req, res) => {
//     res.send('Hello World! contact page');
// });     

// app.delete('/contact', (req, res) => {
//     res.send('Hello World! contact page');
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// })