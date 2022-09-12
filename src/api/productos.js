import dotenv from "dotenv";
import ProductosFactoryDAO from '../model/DAOs/productoFactory.js';

dotenv.config();

export default class ApiProductos {

    constructor() {
        this.productoDAO = ProductosFactoryDAO.get(process.env.TIPO_PRESISTENCIA);
    };

    async obtenerProductos(id) { return await this.productoDAO.obtenerProductos(id) };
    async guardarProducto(producto) { return await this.productoDAO.guardarProducto(producto)};
    async borrarProducto(id) { return await this.productoDAO.borrarProducto(id)};

}