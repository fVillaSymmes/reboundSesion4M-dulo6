const axios = require('axios');
const fs = require('fs/promises');

function randomizer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const retornarStarters = async () => {
    const starters = await fs.readFile('starters.json', 'utf8')
    return JSON.parse(starters)
}

retornarStarters().then(res => {
    pkmnRand = randomizer(0, res.length)
    console.log(pkmnRand);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${res[pkmnRand]}`)
    .then(pkmn => {
        console.log(`Tu pokémon aleatorio es: ${pkmn.data.name}`);
    })
})

// OMITÍ LA PARTE DEL REBOUND QUE INVOLUCRA LAS URL RANDOM DE RANDOM API EN TANTO NO ESTÁ FUNCIONANDO LA API EN CUESTIÓN.

