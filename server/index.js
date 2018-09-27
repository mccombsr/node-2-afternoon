require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = process.env.PORT;
const products_controller = require('./products_controller');

const app = express();

app.use(bodyParser.json());



massive(process.env.CONNECTION_STRING)
.then((dbInstance)=>{
    app.set('db', dbInstance);
    console.log(`Connected to DB`)
})
.catch((err)=>{
    console.log(err)
})

app.get('/api/products', products_controller.getAll)
app.get('/api/products/:id', products_controller.getOne)
app.put('/api/products/:id', products_controller.update)
app.post('/api/products', products_controller.create)
app.delete('/api/products/:id', products_controller.delete)


app.listen(port, ()=>{
    console.log(`Port ${port} is here for you.`)
})
