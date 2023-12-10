class Pokemon {
    constructor(pokemon) {
        console.log(pokemon);
        this.name = pokemon.name;
        this.imgUrl = pokemon.sprites.front_default
    }
}

class PokemonApi {
    constructor() {
        this._pokemonCount = this._getPokemonCount() || 1292;
    }
    
    
    async getARandomPokemon() {
        const pokemonURL = await this._getPokemonURL(this._getRandomPokemonId());
        const pokemon = await $.get(pokemonURL);
        return new Pokemon(pokemon);
    }

    /* --------------- Helpers --------------- */
    async _getPokemonURL(pokemonId) {
        const response = await $.get(`${POKEMON_API}?limit=1&offset=${pokemonId}/`);
        return response.results[0].url;
    }


    _getRandomPokemonId() {
        return Math.floor(Math.random() * this._pokemonCount);
    }

    _getPokemonCount() {
        return $.get("https://pokeapi.co/api/v2/pokemon")
        .then(data => data.count);
    }
}