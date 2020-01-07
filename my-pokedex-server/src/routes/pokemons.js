const { Router } = require('express');
const pokemons = require('../../data/pokedex.json');

const api = Router();

api.get('/', (req, res) => {
    res.json({ pokemons });
})

api.get('/:id', (req, res) => {
    for ( const i in pokemons) {
        if (pokemons[i].ndex === req.params.id) {
            res.send(pokemons[i]);
        }
    }
})

module.exports = api;