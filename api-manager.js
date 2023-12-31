const FRIENDS_COUNT = 6;

class ApiManager {
    constructor() {
        this.pokemonApi = new PokemonApi();
        this.quoteApi = new QuoteApi();
        this.userApi = new UserApi();
        this.baconIpsumApi = new BaconIpsumApi();
    }

    async getRandomData() {
        const pokemonPromise = this.getRandomPokemon();
        const quotePromise = this.getRandomQuote();
        const baconIpsumPromis = this.getRandomBaconIpsum();
        const userPromise = this.getRandomUser();

        return Promise.all([pokemonPromise, quotePromise, baconIpsumPromis, userPromise])
        .then((data) => {
            return {
                pokemon: data[0],
                quote: {text: data[1]},
                baconIpsum: {text: data[2]},
                user: data[3],
                friends: {friends: data[3].friends}
            };
        })
    }

    getRandomPokemon() {
        return this.pokemonApi.getRandomPokemon();
    }

    getRandomUser() {
        return this.userApi.getRandomUser(FRIENDS_COUNT);
    }

    getRandomQuote() {
        return this.quoteApi.getRandomQuote();
    }

    getRandomBaconIpsum() {
        return this.baconIpsumApi.getRandomBaconIpsum();
    }
}
