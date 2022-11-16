const express = require('express')
const app = express()
const PORT = 3000

//set database to variable called pokemon
const pokemon = require('./models/pokemon.js')

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

//create a get route /pokemon that will res.send(pokemon)
app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})
app.listen(3000, () => {
    console.log('listening')
})
