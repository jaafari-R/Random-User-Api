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
        const EXTRA_USERS_COUNT = 3;
        const usersPromises = []
        for(let i = 0; i <= EXTRA_USERS_COUNT; ++i) {
            usersPromises.push(this.getRandomUser());
        }
        
        return Promise.all([this.getRandomPokemon(), this.getRandomQuote(), this.getRandomBaconIpsum(), ...usersPromises])
        .then((data) => {
            return {
                pokemon: data[0],
                quote: data[1],
                baconIpsum: data[2],
                users: data.splice(3)
            };
        })
    }

    getRandomPokemon() {
        return this.pokemonApi.getRandomPokemon();
    }

    getRandomUser() {
        return this.userApi.getRandomUser();
    }

    getRandomQuote() {
        return this.quoteApi.getRandomQuote();
    }

    getRandomBaconIpsum() {
        return this.baconIpsumApi.getRandomBaconIpsum();
    }
}
