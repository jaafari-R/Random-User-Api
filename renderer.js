class Renderer {
    // TODO
    render(data) {
        this.displayUser(data.users[0]);
        this.displayFriends(data.users.slice(1));
        this.displayPokemon(data.pokemon);
        this.displayQuote(data.quote);
        this.displayBaconIpsum(data.baconIpsum);
    }

    // TODO
    displayUser(user) {
        $(".user-container").empty();
        const userTemplate = $("#user-template").html();
        const userHbTemplate = Handlebars.compile(userTemplate);
        const userHTML = userHbTemplate(user);
        $(".user-container").append(userHTML);
    }

    // TODO
    displayFriends(users) {
        $(".friends-container").empty();
        const friendsTemplate = $("#friends-template").html();
        const friendsHbTemplate = Handlebars.compile(friendsTemplate);
        const friendsHTML = friendsHbTemplate({friends: users});
        $(".friends-container").append(friendsHTML);
    }

    // TODO
    displayPokemon(pokemon) {
        $(".pokemon-container").empty();
        const pokemonTemplate = $("#pokemon-template").html();
        const pokemonHbTemplate = Handlebars.compile(pokemonTemplate);
        const pokemonHTML = pokemonHbTemplate(pokemon);
        $(".pokemon-container").append(pokemonHTML);
    }

    // TODO
    displayQuote(quote) {
        $(".quote-container").empty();
        const quoteTemplate = $("#quote-template").html();
        const quoteHbTemplate = Handlebars.compile(quoteTemplate);
        const quoteHTML = quoteHbTemplate({text: quote});
        $(".quote-container").append(quoteHTML);
    }

    // TODO
    displayBaconIpsum(baconIpsum) {
        $(".meat-container").empty();
        const baconIpsumTemplate = $("#baconIpsum-template").html();
        const baconIpsumHbTemplate = Handlebars.compile(baconIpsumTemplate);
        const baconIpsumHTML = baconIpsumHbTemplate({text: baconIpsum});
        $(".meat-container").append(baconIpsumHTML);
    }
}