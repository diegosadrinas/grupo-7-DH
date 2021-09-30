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

app.listen(3001, console.log('server 3001'));