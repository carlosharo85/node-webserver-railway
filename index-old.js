const http = require('http');

http.createServer((req, res) => {
    /*res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n');
    res.write('1, Carlos Haro\n');
    res.write('2, Luis Angel\n');
    res.write('3, Juan Carlos\n');
    res.write('4, Victor Hugo\n');
    res.write('5, Karina Guadalupe');*/

    res.write('Hola Mundo');
    res.end();
}).listen(8080);

console.log('Escuchando el puerto', 8080);