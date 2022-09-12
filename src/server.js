import express from "express";
import dotenv from "dotenv";
import RouterProductos from './routes/productos.js'

const app = express();
app.use(express.json());
dotenv.config();

const routerProductos = new RouterProductos();
app.use('/productos', routerProductos.start());

const PORT = process.env.PORT || 8081;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} - ${process.env.TIPO_PRESISTENCIA}`);
});
server.on('error', error => console.log('Servidor con error', error));