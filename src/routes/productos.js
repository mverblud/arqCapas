import express from "express";
const router = express.Router();

import ControllerProductos from '../controllers/productos.js';

export default class RouterProductos{

    constructor(){
        this.controladorProductos = new ControllerProductos();
    }

    start(){
        router.get('/:id?', this.controladorProductos.obtenerProductos);
        router.post('/', this.controladorProductos.guardarProducto);
        router.delete('/:id', this.controladorProductos.borrarProducto);

        return router;
    }

};