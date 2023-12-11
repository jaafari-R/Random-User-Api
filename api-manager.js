class ApiManager {
    constructor() {
        this.pokemonApi = new PokemonApi();
        this.quoteApi = new QuoteApi();
        this.userApi = new UserApi();
        this.baconIpsumApi = new BaconIpsumApi();
    }

    // TODO add Docs/comment
    // TODO get 7 users
    async getRandomData() {
        return Promise.all([this.getRandomPokemon(), this.getRandomQuote(), this.getRandomBaconIpsum(), this.getRandomUser()])
        .then((data) => {
            console.log(data[3])
            return {
                pokemon: data[0],
                quote: data[1],
                baconIpsum: data[2],
                user: data[3]
            };
        })
    }

    getRandomPokemon() {
        return this.pokemonApi.getRandomPokemon();
    }

    getRandomUser() {
        const FRIENDS_COUNT = 6;
        return this.userApi.getRandomUser(FRIENDS_COUNT);
    }

    getRandomQuote() {
        return this.quoteApi.getRandomQuote();
    }

    getRandomBaconIpsum() {
        return this.baconIpsumApi.getRandomBaconIpsum();
    }
}
