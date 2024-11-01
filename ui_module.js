export class UI {
    displayMovieSuggestion(movie) {
        const suggestionDiv = document.getElementById("movieSuggestion");
        suggestionDiv.innerHTML = `
            <div class="movie-info">
                <img src="${movie.poster}" alt="${movie.title} poster" class="movie-poster">
                <div>
                    <h2>${movie.title}</h2>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Rating:</strong> ${movie.rating}</p>
                    <p>${movie.description}</p>
                </div>
            </div>
        `;
    }

    displayError() {
        const suggestionDiv = document.getElementById("movieSuggestion");
        suggestionDiv.innerHTML = `<p style="color: red;">something went wrong, please try again.</p>`;
    }
}
