const hbs = require('hbs');

// No es necesario exportar ya que esto¿e es codigo que se ejecuta y se registra en las vistas del hbs directamente

// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    //Split separa cada parte del texto por palabras separadas con un espacio
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});