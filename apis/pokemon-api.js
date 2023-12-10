class Pokemon {
    constructor(pokemon) {
        this.name = pokemon.name;
        this.imgUrl = pokemon.sprites.front_default
    }
}

class PokemonApi {
    constructor() {
        this._pokemonCount = DEFAULT_POKEMON_COUNT;
        // get the pokemon count from the api
        this._getPokemonCount();
    }
    
    
    async getRandomPokemon() {
        const pokemonURL = await this._getPokemonURL(this._getRandomPokemonId());
        const pokemon = await $.get(pokemonURL);
        return new Pokemon(pokemon);
    }

    /* --------------- Helpers --------------- */
    async _getPokemonURL(pokemonId) {
        console.log(pokemonId)
        const response = await $.get(`${POKEMON_API}?limit=1&offset=${pokemonId}/`);
        return response.results[0].url;
    }

    _getRandomPokemonId() {
        return Math.floor(Math.random() * this._pokemonCount);
    }

    _getPokemonCount() {
        return $.get(POKEMON_API)
        .then(data => {
            data.count
            console.log(data.count)
        });
    }
}