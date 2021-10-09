const express = require('express');
const app = express();
const webRoutes = require('./routes/webRoutes')

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', webRoutes);
app.use('/login', webRoutes);
app.use('/register', webRoutes);
app.use('/productCart', webRoutes);
app.use('/productDetail', webRoutes);
app.use('/creacionProdcutos', webRoutes);
app.use('/detalle/id', webRoutes);


app.listen(process.env.PORT || 3001, function(){
    console.log('Servidor funcionando en el 3001');
});