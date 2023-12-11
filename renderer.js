class Component {
    constructor(templateSelector, containerSelector) {
        this.template = $(templateSelector);
        this.container = $(containerSelector);
    }

    render(data) {
        this.container.empty();
        const HbTemplate = Handlebars.compile(this.template.html());
        const HTML = HbTemplate(data);
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
        this.components.user.render(data.users[0]);
        this.components.friends.render(data.users.slice(1));
        this.components.pokemon.render(data.pokemon);
        this.components.quote.render({text: data.quote});
        this.components.baconIpsum.render({text: data.baconIpsum});
    }
}