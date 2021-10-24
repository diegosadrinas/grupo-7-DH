const express = require('express');
const path = require('path')
const app = express();
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const methodOverride = require('method-override');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); 

app.use('/', mainRouter);
app.use('/products', productsRouter);


app.listen(process.env.PORT || 3001, function(){
    console.log('Servidor funcionando en el 3001');
});