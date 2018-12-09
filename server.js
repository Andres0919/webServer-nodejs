const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//middleware
app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//helpers


app.get('/', (req, res) => {
    // res.send('Hello World');

    res.render('home',{
        nombre: 'andrés'
    });
});

app.get('/about', (req, res) => {
    // res.send('Hello World');

    res.render('about',{
        nombre: 'Andrés',
        mes: 'Diciembre'
    });
});

app.get('/data', (req, res) => {

    res.send('Hello World');
});

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${ port }`));