import productosDTO from '../DTOs/productos.js';
import ProductoBaseDAO from './productos.js';
import Producto from '../models/productos.js';
//import mongoose from "mongoose";

export default class ProductoDBMongoDAO extends ProductoBaseDAO {

    constructor() {
        super();
        this._collection = Producto;
//        this.conectarDB();
        
    };

/*     async conectarDB() {
        try {
            const db = await mongoose.connect(
                process.env.MONGO_URI,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
            );

            const url = `${db.connection.host}:${db.connection.port}`;
            console.log(`MongoDB conectado en: ${url}`);
        } catch (error) {
            console.log(`Error: ${error.message}`);
            process.exit(1);
        }
    }; */

    obtenerProductos = async _id => {
        try {
            if (_id) {
                const producto = await this._collection.findOne({ _id });
                return [producto];
            } else {
                const productos = await this._collection.find({});
                return productos
            }

        } catch (error) {
            console.log('error en obtenerProductos', error);
        }
    };

    guardarProducto = async producto => {
        try {
            const productoDB = new this._collection(producto);
            const productoGuardado = await productoDB.save();
            return productoGuardado;
        } catch (error) {
            console.log('error en guardarProducto', error);
            return producto;
        }
    };

    borrarProducto = async _id => {
        let productoBorrada = productosDTO({}, _id, null)
        try {
            await this._collection.deleteOne({ _id });
            return productoBorrada;
        } catch (error) {
            console.log('error en obtenerProductos', error);
            return productoBorrada;
        }
    };

}