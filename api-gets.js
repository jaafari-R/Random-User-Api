// get poke count
let pokeCount = 1292;
$.get("https://pokeapi.co/api/v2/pokemon")
.then(data => pokeCount = data.count)


// user
$.get("https://randomuser.me/api/?format=json")
.then(user => {
    // console.log(user.results[0]);
})

// quote
$.get("https://api.kanye.rest/pokemon/")
.then(quote => {
    // $("#quote").text(quote.quote)
})

const randomPokemonId = Math.floor(Math.random() * pokeCount);
// pokemon
$.get(`https://pokeapi.co/api/v2/pokemon/?limit=1&offset=${randomPokemonId}/`)
.then((data) => {
    console.log(data)
    $.get(data.results[0].url)
    .then(poke => console.log(poke))
})
// bacon ipsum
$.get("https://baconipsum.com/api/?type=meat-and-filler&paras=1")
.then((data) => {
    // console.log(data);
    // $("body").append($("<p>" + data[0] + "</p>"))
})