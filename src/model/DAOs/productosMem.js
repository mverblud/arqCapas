import productosDTO from '../DTOs/productos.js';
import ProductoBaseDAO from './productos.js';

export default class ProductosMemFileDAO extends ProductoBaseDAO {

    constructor() {
        super();
        this.productos = [];
    };

    obtenerProductos = async _id => {
        try {
            if (_id) {
                let index = this.productos.findIndex(producto => producto._id == _id);
                return index >= 0 ? [this.productos[index]] : [];
            } else {
                return this.productos
            }

        } catch (error) {
            console.log('error en obtenerProductos', error);
            return [];
        }
    };

//  Pendiente
    guardarProducto = async producto => {
        return [];
    };

//  Pendiente
    borrarProducto = async _id => {
        return [];
    };

}