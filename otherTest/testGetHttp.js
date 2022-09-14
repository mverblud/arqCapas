import http from 'http';

// Obtener productos
const req = http.get('http://localhost:8081/productos', (res) => {

    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (productos) => {
        process.stdout.write(productos);
    });

    res.on('error', error => {
        console.log(error);
    });

});

req.end();