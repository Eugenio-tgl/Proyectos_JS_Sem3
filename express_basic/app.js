//Usando objeto express
const express = require('express')
//App de Express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, respondera a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World')
})

//Respondiendo texto
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})

//Regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorerInNode', (req, res) => {
    const explorer ={name: "Explorer", msg:"Hello"}
    res.send(explorer)
})

//Query Params: Recibir parametros por la url
//http://localhost:3000/explorers/carlo
//req.params = {"explorerName": "carlo"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})