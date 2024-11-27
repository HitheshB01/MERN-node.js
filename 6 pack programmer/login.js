const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/home', (req, res) => {
    res.send(`<h1> Username: ${req.body.username}<br>Password: ${req.body.password}<h1>`);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});