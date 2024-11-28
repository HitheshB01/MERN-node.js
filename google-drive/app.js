const express = require('express');
const app = express();
const port = 3000;

const dotenv = require('dotenv');
dotenv.config();
const dbConnect = require('./config/db');
dbConnect();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

const userRouter = require('./routes/user.routes');
const homeRouter = require('./routes/home.routes');


app.use("/user",userRouter); 
app.use("/",homeRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});