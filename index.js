require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;


// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');


// servir contenido estatico
// middleware
app.use(express.static(__dirname+'/public', {
    extensions: ['html', 'htm']
}));


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Carlos Haro',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
});


app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
});