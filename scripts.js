const user = {
  firstName: "Will",
  lastName: "Smith",
  age: 25,
  movies: ["Men in black 1", "Men in black 2", "Men in black 3"],
};

const source = document.getElementById("content-generator").innerHTML;
const pokemonSource = document.getElementById("pokemon-generator").innerHTML

const template = Handlebars.compile(source);
const pokemonTemplate = Handlebars.compile(pokemonSource);

document.getElementById("content").innerHTML = template(user);

fetch("https://pokeapi.co/api/v2/pokemon-color/yellow/")
  .then((response) => response.json())
  .then((data) => {
     const newObject = {}
     newObject.pokeArray = data.pokemon_species.slice(0, 10)
     document.getElementById("pokemons").innerHTML = pokemonTemplate(
     newObject
    );

    console.log(data.pokemon_species);
  });

