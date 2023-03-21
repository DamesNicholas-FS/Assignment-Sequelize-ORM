const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const productRouter = require('./routes/Products');

app.set('views', __dirname + '/templates');
app.set('view engine', 'twig');

app.get('/', (req, res) => {
   res.redirect('/products');
});

app.use('/products', productRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})