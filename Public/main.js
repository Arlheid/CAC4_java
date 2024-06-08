const apiUrl = "https://rickandmortyapi.com/api/character"; /* invocando la API */ 

/* intento ordenar mediante estructura y tarjetas */

function makeCard (character){
    const { name, status, image } = character
    const cardsContainer = document.querySelector(".cards-container");


    /* reclamo datos de la API de manera puntual */
    const title = document.createElement ("h5")
    title.textContent = name;
    
    const characterStatus = document.createElement("p");
    characterStatus.textContent = status; /* Murio / no murio */
    if(status == "Alive") characterStatus.style.color = "green";
    else characterStatus.style.color = "gray";
    
    const characterImage = document.createElement ("img");
    characterImage.src = image;
    characterImage.width = 200;

    const Card = document.createElement("div");
    Card.appendChild(title);
    Card.appendChild(characterImage);
    Card.appendChild(characterStatus);
    Card.style.backgroundColor = "red"

    cardsContainer.appendChild(Card);


}

/* establezco pedido asincronico */
async function getCharacters () {
    try {
        const response = await fetch(apiUrl);
        const { results } = await response.json();

        /* For Each con los resultados del Visor */
        for(let i = 0; i < results.length; i++ ) {
        makeCard(results[i]);
        }
           


        } catch (error) {
        console.error(error);
        }
    }

getCharacters();