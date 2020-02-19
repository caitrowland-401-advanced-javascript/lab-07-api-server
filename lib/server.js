const express = require('express')
const app = express()
let db = []




app.use(express.json())

/////Categories 

app.get('/categories', (request, response) => {
    let output = {
        name: request.query.name
    }
    response.status(200).json(output)
    

})

app.post('/categories', (request, response) => {
    db.push(request.body)
    response.status(201).json(request.body)
})

app.put('/categories/:id', (request, response) => {

    let idToUpdate = request.params.id;

    let {name, id} = request.body;

    let updateRecord = {name, id};

    db = db.filter((results) => (results.id === parseInt(idToUpdate)) ? updateRecord : results)
    response.json(updateRecord)

    .catch(error => console.error(error))
})

app.delete('/categories/:id', (request, response) => {
    let idToDelete = request.params.id;
    db = db.filter((results) => results.id !== parseInt(idToDelete))
    response.json({})
})

module.exports = {
    server: app,
    start: function(port) {
        const PORT = port || process.env.PORT || 3000
        app.listen(PORT, () => console.log('listening on port'))
    }
}


/////Products 
app.get('/products', (request, response) => {
    let output = {
        name: request.query.name
    }
    response.status(200).json(output)
    

})

app.post('/products', (request, response) => {
    db.push(request.body)
    response.status(201).json(request.body)
})

app.put('/products/:id', (request, response) => {

    let idToUpdate = request.params.id;

    let {name, id} = request.body;

    let updateRecord = {name, id};

    db = db.filter((results) => (results.id === parseInt(idToUpdate)) ? updateRecord : results)
    response.json(updateRecord)

    .catch(error => console.error(error))
})

app.delete('/products/:id', (request, response) => {
    let idToDelete = request.params.id;
    db = db.filter((results) => results.id !== parseInt(idToDelete))
    response.json({})
})

module.exports = {
    server: app,
    start: function(port) {
        const PORT = port || process.env.PORT || 3000
        app.listen(PORT, () => console.log('listening on port'))
    }
}