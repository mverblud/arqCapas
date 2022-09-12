export default class ProductoBaseDAO {

    getNext_Id(productos) {
        let length = productos.length;
        return length ? parseInt(productos[length - 1]._id + 1) + 1 : 1;
    };

    getIndex(_id, productos) {
        return productos.findIndex(producto => producto ? producto._id == _id : true);
    }

};