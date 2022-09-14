import http from 'http';

const producto = JSON.stringify({
    nombre: "Producto 7",
    descripcion: "El primero Producto que voy a crear",
    codigo: "PRD1234",
    foto: "producto1.jpg",
    precio: 100.22,
    stock: 5
});

const opciones = {
    hostname:'localhost',
    port:8081,
    path:'/productos',
    method: 'POST',
    headers:{
        'Content-Type':'application/json',
        'Content-Length': producto.length,
    }
};

http.request(opciones, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (producto) => {
        process.stdout.write(producto);
    });
    res.on('error', error => {
        console.log(error);
    });
}).write(producto);
