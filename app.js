const pokemonRow = document.getElementById("pokemon-row");

fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => response.json())
    .then(data => {
        const pokemonArray = data.results;
        
        pokemonArray.forEach(pokemonObject => {
            createPokemonCard(pokemonObject);
        });
    })


function createPokemonCard(pokemon) {
    const pokemonCol = document.createElement("div");
    pokemonCol.className = "col-12 col-md-6 col-lg-4 my-4";

    const pokemonCard = document.createElement("div");
    pokemonCard.className = "card shadow-lg p-3 rounded-3";

    const pokemonCardTitle = document.createElement("div")
    pokemonCardTitle.className = "card-title bg-danger text-white rounded-3";

    const pokemonCardBody = document.createElement("div");
    pokemonCardBody.className = "card-body";

    const pokemonName = document.createElement("h3");
    pokemonName.className = "text-center";
    pokemonName.textContent = pokemon.name;

    const pokemonLink = document.createElement("a");
    pokemonLink.href = pokemon.url;
    pokemonLink.textContent = "View my API Details";

    pokemonCardTitle.appendChild(pokemonName);
    pokemonCardBody.appendChild(pokemonLink);
    pokemonCard.appendChild(pokemonCardTitle);
    pokemonCard.appendChild(pokemonCardBody);
    pokemonCol.appendChild(pokemonCard);

    pokemonRow.appendChild(pokemonCol);
}
