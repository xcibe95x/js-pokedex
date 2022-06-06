const pokedex = document.querySelector('.poke-container');
const str1 = "0";

for(i = 0; i <= 150; i++) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + i)
    .then(result => result.json())
    .then(pokemon => insertPokemon(
        pokemon.sprites.front_default,
        pokemon.name,
        pokemon.id,
        pokemon.types[0].type.name
    ));
}


function insertPokemon (sprite, name, id, type) {
    // let parseId = id;
    // parseId = id.padStart(2, "0");
    pokedex.innerHTML += `        
    <div id="dv_${id}" class="poke-card ${type}">
    <div class="poke-sprite">
        <img src="${sprite}">
    </div>
    <div class="poke-detail">
        <span class="identifier">#${id.toString().padStart(3, "0")}</span>
        <p>${name}</p>
        <p>Type: ${type}</p>
    </div>
    </div>
    </div>
    `
    sortHtml();
}

function sortHtml () {
    var main = document.getElementById( 'main' );
    [].map.call( main.children, Object ).sort( function ( a, b ) {
        return +a.id.match( /\d+/ ) - +b.id.match( /\d+/ );
    }).forEach( function ( elem ) {
        main.appendChild( elem );
    });
}