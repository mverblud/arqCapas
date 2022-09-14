import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import RouterProductos from './routes/productos.js';

const app = express();
app.use(express.json());
dotenv.config();

if (process.env.TIPO_PRESISTENCIA = 'MONGO') {
    conectarDB();
}

const routerProductos = new RouterProductos();
app.use('/productos', routerProductos.start());

const PORT = process.env.PORT || 8081;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} - ${process.env.TIPO_PRESISTENCIA}`);
});
server.on('error', error => console.log('Servidor con error', error));