const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema);

app.post('/api/v1/products/new', (req, res) => {
    const product = new Product(req.body);

    res.status(201).json(product);
    product.save()
        .then(() => res.send('Product saved'))
        .catch((error) => res.send(error));
});

app.get('/', (req, res) => {
    res.send('Hello World! home page');
}); 



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});