const {server} = require('../lib/server')
const supertest = require('supertest');
const mockRequest = supertest(server);



describe('our server', () => {
    //categories 
    it('adds another item on post request to /caegories', () => {
        const newCategor = {name: "test categor", id: 1}
        return mockRequest
        .post('/categories')
        .send(newCategor)
        .then(results => {
            expect(results.status).toBe(201)
            expect(results.body.name).toEqual('test categor')
        })
    })
    
    it('responds correctly on GET request to /categories', () => {
        return mockRequest 
        .get('/categories')
        .then(results => {
            expect(results.status).toBe(200)
        })
        .catch(console.error)
    })
    it('updates record on put request to /category', () => {
        return mockRequest
        .put('/categories/1')
        .send({name: "updated", id:1})
        .then(results => {
            expect(results.status).toBe(200)
            expect(results.body.name).toEqual('updated')
        })
    })

    it('deletes record on delete request to /category', () => {
        return mockRequest
        .delete('/categories/1')
        .then(results => {
            expect(results.body).toEqual({})
            expect (results.status).toBe(200)
        })
    })


    //products 

    it('adds another item on post request to /caegories', () => {
        const newProd = {name: "test prod", id: 1}
        return mockRequest
        .post('/products')
        .send(newProd)
        .then(results => {
            expect(results.status).toBe(201)
            expect(results.body.name).toEqual('test prod')
        })
    })
    
    it('responds correctly on GET request to /products', () => {
        return mockRequest 
        .get('/products')
        .then(results => {
            expect(results.status).toBe(200)
        })
        .catch(console.error)
    })
    it('updates record on put request to /prodcuts', () => {
        return mockRequest
        .put('/products/1')
        .send({name: "updated", id:1})
        .then(results => {
            expect(results.status).toBe(200)
            expect(results.body.name).toEqual('updated')
        })
    })

    it('deletes record on delete request to /products', () => {
        return mockRequest
        .delete('/products/1')
        .then(results => {
            expect(results.body).toEqual({})
            expect (results.status).toBe(200)
        })
    })


})