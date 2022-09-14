import axios from "axios";

const producto = {
    nombre: "Producto AXIOS",
    descripcion: "El primero Producto que voy a crear",
    codigo: "AXIOS1234",
    foto: "producto1.jpg",
    precio: 100.22,
    stock: 5
};

const getProducto = async () => {
    const productos = await axios('http://localhost:8081/productos');
    console.log(`statusCode: ${productos.status}`);
    console.log('Productos', productos.data);

};

const postProducto = async () => {
    const productoDB = await axios.post('http://localhost:8081/productos',producto);
    console.log(`statusCode: ${productoDB.status}`);
    console.log('Producto Creado', productoDB.data);
};

postProducto();
getProducto();