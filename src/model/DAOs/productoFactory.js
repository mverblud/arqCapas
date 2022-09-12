import ProductosMemDAO from './productosMem.js';
import ProductosDBMongo from './productosDBMongo.js';
import Producto from '../models/productos.js';

export default class ProductoFactoryDAO {
    static get(tipo) {
        switch (tipo) {
            case 'MEM': return new ProductosMemDAO();
            case 'MONGO': return new ProductosDBMongo(Producto);
            default: return new ProductosDBMongo(Producto);
        }
    }
};