// Código de npm express
const express = require('express');
const app = express();

// Hbs
const hbs = require('hbs');
require('./hbs/helpers');

// middleware ( /public es el directorio que e mostrará )
app.use(express.static(__dirname + '/public'));

// Express HBS engine, app hace referencia a express; cuando se pone el dirname no importa cual path tenga en produccion o similares y concatena el path
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


// Hay que tener cuidado al usar el middleware ya que puede confundir con el get / y mostrar uno de los dos
app.get('/', (req, res) => {
    // res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'Cristian',
    //     url: req.url
    // };

    // Internamente send detecta que es un objeto y lo serializa en formato JSON
    // res.send(salida);

    // Renderizando página
    res.render('home', {
        // Pasando datos a home.hbs
        nombre: 'criStian'

        // anio se usaba en los dos renderizados, ahora es un helper

    });

});

// Página about
app.get('/about', (req, res) => {

    res.render('about');

});

// // Creando otro servicio para el /data
// app.get('/data', (req, res) => {
//     res.send('Hola Data');

// });

// Escuchando puerto 3000
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});