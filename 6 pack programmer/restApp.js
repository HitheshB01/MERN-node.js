const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema);

app.post('/products', (req, res) => {
    const product = new Product(req.body);
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