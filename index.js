const express = require('express');
const exphbs =require('express-handlebars');
const app = express();

const connection = require ('./db/connection');
const employeeRoutes = require('./routes/employeeRoutes');

app.engine('handlebars', exphbs());
app.set('view engine' , 'handlebars');

//permite ler o que vier no corpo da requisição
app.use (
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json());
app.use(express.static('public'));
app.use('/', employeeRoutes);
app.listen(3000);