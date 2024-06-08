document.addEventListener('DOMContentLoaded', function() {
    fetchCharacters();
});

function fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
       .then(response => response.json())
       .then(data => displayCharacters(data.results))
       .catch(error => console.error('Error fetching characters:', error));
}

function displayCharacters(characters) {
    const charactersContainer = document.getElementById('characters');
    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');

        const name = document.createElement('h2');
        name.textContent = character.name;

        const status = document.createElement('p');
        status.textContent = `Status: ${character.status}`;

        const species = document.createElement('p');
        species.textContent = `Species: ${character.species}`;

        card.appendChild(name);
        card.appendChild(status);
        card.appendChild(species);
        card.style.backgroundColor = "red"

        charactersContainer.appendChild(card);
    });
}
