import request from 'supertest';
import chai from 'chai';
//import faker from 'faker';

const assert = chai.assert;
const expect = chai.expect;

describe('Probando API', () => {

    describe('GET', () => {
        it('Status 200', async () => {
            const respuesta = await request('http://localhost:8081').get('/productos');
            expect(respuesta.status).to.eql(200)
        });
    });

    describe('POST', () => {
        it('add Product', async () => {

            const producto = {
                nombre: "Producto 7", //faker.eccomerce.name();
                descripcion: "El primero Producto que voy a crear",
                codigo: "PRD1234",
                foto: "producto1.jpg",
                precio: 100.22,
                stock: 5
            };

            const respuesta = await request('http://localhost:8081').post('/productos').send(producto);
            expect(respuesta.status).to.eql(200);

            const productoBody = respuesta.body;

            //    expect(productoBody).to.include.keys('nombre', 'descripcion', 'codigo', 'foto', 'precio', 'stock');
            expect(productoBody.nombre).to.eql(producto.nombre);
            expect(productoBody.descripcion).to.eql(producto.descripcion);

        });
    });

    describe('DELETE', () => {
        it('delete Product', async () => {

            const productoID = '63091b94cc91a01727963d0a'
            const respuesta = await request('http://localhost:8081').delete(`/productos/${productoID}`);
            expect(respuesta.status).to.eql(200);

/*             console.log('id',productoID);
            const productoBody = respuesta.body;
            console.log('body',productoBody);
            expect(productoBody._id).to.eql(productoID); */

        });
    });

});