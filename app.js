// Get reference to the container element where Pokemon cards will be displayed
const pokemonRow = document.getElementById("pokemon-row");

// Fetch data from the PokeAPI
// This is an asynchronous operation that returns a Promise
fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    // First .then() converts the response to JSON format
    // This is also asynchronous and returns another Promise
    .then(response => response.json())
    // Second .then() handles the actual data after it's converted to JSON
    .then(data => {
        // Extract the array of Pokemon from the response data
        const pokemonArray = data.results;
        
        // Loop through each Pokemon in the array and create a card for it
        pokemonArray.forEach(pokemonObject => {
            createPokemonCard(pokemonObject);
        });
    })

/**
 * Creates and displays a card element for a single Pokemon
 * @param {Object} pokemon - Pokemon object containing name and URL
 */
function createPokemonCard(pokemon) {
    // Create column div for responsive grid layout
    // Bootstrap classes make it responsive:
    // - col-12: full width on small screens
    // - col-md-6: half width on medium screens
    // - col-lg-4: one-third width on large screens
    const pokemonCol = document.createElement("div");
    pokemonCol.className = "col-12 col-md-6 col-lg-4 my-4";

    // Create the main card container
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "card shadow-lg p-3 rounded-3";

    // Create the card title section
    const pokemonCardTitle = document.createElement("div")
    pokemonCardTitle.className = "card-title bg-danger text-white rounded-3";

    // Create the card body section
    const pokemonCardBody = document.createElement("div");
    pokemonCardBody.className = "card-body";

    // Create and set up the Pokemon name heading
    const pokemonName = document.createElement("h3");
    pokemonName.className = "text-center";
    pokemonName.textContent = pokemon.name;

    // Create and set up the link to Pokemon details
    const pokemonLink = document.createElement("a");
    pokemonLink.href = pokemon.url;
    pokemonLink.textContent = "View my API Details";

    // Build the card structure by appending elements to their parents
    // This is DOM manipulation - adding elements as children of other elements
    pokemonCardTitle.appendChild(pokemonName);
    pokemonCardBody.appendChild(pokemonLink);
    pokemonCard.appendChild(pokemonCardTitle);
    pokemonCard.appendChild(pokemonCardBody);
    pokemonCol.appendChild(pokemonCard);

    // Finally, add the complete card to the main container
    pokemonRow.appendChild(pokemonCol);
}
