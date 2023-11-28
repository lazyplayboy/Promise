
const characterIDInput = document.getElementById('character-id-input');
const searchButton = document.getElementById('search-button');
const characterInfoContainer = document.getElementById('character-info-container');

searchButton.addEventListener('click', () => {
  const characterID = characterIDInput.value.trim();

  if (!characterID) {
    alert('Please enter a character ID');
    return;
  }

  fetch(`https://api.disneyapi.dev/characters/${characterID}`)
    .then(response => response.json())
    .then(character => {
      const characterName = character.name;
      const characterImage = character.imageUrl;
      const characterFilms = character.films;
      const characterTVShows = character.tvShows;
      const charactervideogames = character.videoGames;
      characterInfoContainer.innerHTML = `
        <div class="character-card">
          <img src="${characterImage}" alt="${characterName}" class="character-image" style="width: 300px; height: 300px;">
          <h2 class="character-name">${characterName}</h2>
          <p class="character-id">ID: ${characterID}</p>
          <div class="character-info">
            <span class="character-info-label">Films: </span>
            <span class="character-info-value">${characterFilms.length > 0 ? characterFilms.join(', ') : 'N/A'}</span>
          </div>
          <div class="character-info">
            <span class="character-info-label">TV Shows: </span>
            <span class="character-info-value">${characterTVShows.length > 0 ? characterTVShows.join(', ') : 'N/A'}</span>
          </div>
          <div class="character-info">
            <span class="character-info-label"> Video Games : </span>
            <span class="character-info-value">${charactervideogames.length > 0 ? charactervideogames.join(',') : 'N/A'}</span>
          </div>
        </div>
      `;
    })
    .catch(error => {
      console.error(error);
      alert(`No Match for the Given ID ${error.message}`);
    });
});
