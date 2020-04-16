// Crear webs server para desplegar contenido en la web, este paquete ya viene preinstalado en node
const http = require('http');


// Creando servidor
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Cristian',
        edad: 27,
        url: req.url
    }


    res.write(JSON.stringify(salida));

    // res.write('Hola mundo');

    // Terminando de crear la respuesta
    res.end();

}).listen(8080); // Configurando puerto a escuchar

console.log('Escuchando el puerto 8080');