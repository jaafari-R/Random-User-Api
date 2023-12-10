class APIManager {
    constructor() {
        this.pokemonApi = new PokemonApi();
        this.quoteApi = new QuoteApi();
        this.userApi = new UserApi();
        this.baconIpsumApi = new BaconIpsumApi();
    }

    async getData() {
        const EXTRA_USERS_COUNT = 6;
        const usersPromises = []
        for(const i = 0; i <= EXTRA_USERS_COUNT; ++i) {
            usersPromises.push(this.getRandomUser());
        }
        
        Promise.all([am.getRandomPokemon(), am.getRandomQuote(), am.getRandomBaconIpsum(), ...usersPromises])
        .then((data) => {
            return {
                pokemon: data[0],
                quote: data[1],
                baconIpsum: data[2],
                users: data.splice(3)
            };
        })
    }

    async getRandomPokemon() {
        return await this.pokemonApi.getRandomPokemon();
    }

    // TODO
    async getRandomUser() {
        return await this.userApi.getRandomUser();
    }

    // TODO
    async getRandomQuote() {
        return await this.quoteApi.getRandomQuote();
    }

    // TODO
    async getRandomBaconIpsum() {
        return await this.baconIpsumApi.getRandomBaconIpsum();
    }
}

const am = new APIManager();
