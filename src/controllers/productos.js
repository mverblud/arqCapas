import ApiProductos from '../api/productos.js';

export default class ControllerProductos{
    
    constructor(){
        this.apiProductos = new ApiProductos();
    }

    obtenerProductos = async (req,res) => {
        try {
            let id = req.params.id;
            let producto = await this.apiProductos.obtenerProductos(id);
            res.json(producto);

        } catch (error) {
            console.log('error obtenerProductos',error);
        }
    };

    guardarProducto = async (req,res) => {
        try {
            let producto = req.body;
            let productoDB = await this.apiProductos.guardarProducto(producto);
            res.json(productoDB);

        } catch (error) {
            console.log('error obtenerProductos',error);
        }
    };

    borrarProducto = async (req,res) => {
        try {
            let id = req.params.id;
            let producto = await this.apiProductos.obtenerProductos(id);
            res.json(producto);

        } catch (error) {
            console.log('error obtenerProductos',error);
        }
    };

}