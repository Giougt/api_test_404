const div1 = document.createElement("div");  
div1.className ="pokemon"; 
document.body.appendChild(div1); 

const title1 = document.createElement("h1");  
title1.append("Pokemon"); 
 
const pokemon = document.querySelector(".pokemon");

function createPokemonCard(pokemon){
    const card  = document.createElement("div");
    card.textContent= pokemon.name;
    document.body.appendChild(card); 
}; 

const fetchpokemon = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const { results } = await response.json();
        console.log(results);
        results.forEach(element => {
            createPokemonCard(element)
        });
    } catch (error) {
        console.error(error);
    }
}



document.body.appendChild(title1); 
fetchpokemon();
