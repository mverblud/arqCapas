import ProductosMemDAO from './productosMem.js';
import ProductosDBMongo from './productosDBMongo.js';

export default class ProductoFactoryDAO {
    static get(tipo) {
        switch (tipo) {
            case 'MEM': return new ProductosMemDAO();
            case 'MONGO': return new ProductosDBMongo();
            default: return new ProductosDBMongo();
        }
    }
};