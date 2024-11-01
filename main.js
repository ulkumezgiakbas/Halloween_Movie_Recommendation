import { MovieService } from './film_module.js';
import { UI } from './ui_module.js';

const ui = new UI();
window.ui = ui;

class App {
    constructor() {
        this.movieService = new MovieService();
        this.ui = new UI();
        this.initialize();
    }

    initialize() {
        const suggestButton = document.getElementById("suggestButton");
        suggestButton.addEventListener("click", () => this.handleMovieSuggestion());
    }

    async handleMovieSuggestion() {
        const randomMovie = await this.movieService.getRandomMovie();
        const movieDetails = await this.movieService.getMovieDetails(randomMovie);

        if (movieDetails) {
            this.ui.displayMovieSuggestion(movieDetails);
        } else {
            this.ui.displayError();
        }
    }
}



new App();