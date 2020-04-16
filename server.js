// Código de npm express
const express = require('express');
const app = express();

// middleware ( /public es el directorio que e mostrará )
app.use(express.static(__dirname + '/public'));

// Hay que tener cuidado al usar el middleware ya que puede confundir con el get / y mostrar uno de los dos
// app.get('/', (req, res) => {
//     // res.send('Hola Mundo');
//     let salida = {
//         nombre: 'Cristian',
//         edad: 27,
//         url: req.url
//     };

//     // Internamente send detecta que es un objeto y lo serializa en formato JSON
//     res.send(salida);

// });

// // Creando otro servicio para el /data
// app.get('/data', (req, res) => {
//     res.send('Hola Data');

// });

// Escuchando puerto 3000
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});