class Component {
    constructor(templateSelector, containerSelector) {
        this.template = Handlebars.compile($(templateSelector).html());
        this.container = $(containerSelector);
    }

    render(data) {
        this.container.empty();
        const HTML = this.template(data);
        this.container.append(HTML);
    }
}

class Renderer {
    constructor() {
        this.components = {
            user: new Component(USER_TEMPLATE_SELECTOR, USER_CONTAINER_SELECTOR),
            friends: new Component(FRIENDS_TEMPLATE_SELECTOR, FRIENDS_CONTAINER_SELECTOR),
            pokemon: new Component(POKEMON_TEMPLATE_SELECTOR, POKEMON_CONTAINER_SELECTOR),
            quote: new Component(QUOTE_TEMPLATE_SELECTOR, QUOTE_CONTAINER_SELECTOR),
            baconIpsum: new Component(BACONIPSUM_TEMPLATE_SELECTOR, BACONIPSUM_CONTAINER_SELECTOR)
        }
    }
    
    render(data) {
        this.components.user.render(data.user);
        this.components.friends.render(data.friends);
        this.components.pokemon.render(data.pokemon);
        this.components.quote.render(data.quote);
        this.components.baconIpsum.render(data.baconIpsum);
    }

    addSavedUserOption(id, name) {
        $("#savedUsers").append($(`<option value=${id}>${name}</option>`));
    }
}