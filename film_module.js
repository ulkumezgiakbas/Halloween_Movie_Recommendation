export class MovieService {
  constructor() {
    this.apiKey = '********'; 
    // Top 100 horror movie list taken from IMDb (static because CORS error)
    this.movies = [
      "Psycho",
      "The Shining",
      "Halloween",
      "The Exorcist",
      "Jaws",
      "The Texas Chain Saw Massacre",
      "Hereditary",
      "Rosemary’s Baby",
      "Get Out",
      "The Silence of the Lambs",
      "It Follows",
      "The Babadook",
      "A Nightmare on Elm Street",
      "Alien",
      "The Thing",
      "Suspiria",
      "The Witch",
      "The Ring",
      "Scream",
      "Candyman",
      "An American Werewolf in London",
      "Paranormal Activity",
      "Let the Right One In",
      "Midsommar",
      "Insidious",
      "The Conjuring",
      "Evil Dead 2",
      "Saw",
      "The Descent",
      "A Quiet Place",
      "Child's Play",
      "The Grudge",
      "28 Days Later",
      "The Mist",
      "The Cabin in the Woods",
      "Candyman",
      "Flatliners",
      "The Others",
      "Wheatley",
      "Phantasm",
      "Under the Shadow",
      "I Know What You Did Last Summer",
      "The Haunting",
      "The Omen",
      "Happy Death Day",
      "The Fly",
      "Carrie",
      "The Conjuring 2",
      "Sinister",
      "The Fog",
      "Pet Sematary",
      "The Lighthouse",
      "The Eye",
      "Don't Breathe",
      "The Witch Who Came from the Sea",
      "Silver Bullet",
      "A Girl Walks Home Alone at Night",
      "The Innocents",
      "The Girl with All the Gifts",
      "May",
      "Session 9",
      "Martyrs",
      "Chopping Mall",
      "The Lair of the White Worm",
      "The Wailing",
      "The Belko Experiment",
      "The Taking of Deborah Logan",
      "Housebound",
      "Last House on the Left",
      "House on Haunted Hill",
      "The Amityville Horror",
      "I Spit on Your Grave",
      "Diabolique",
      "The Banshees of Inisherin",
      "Until Dawn",
      "The Bye Bye Man",
      "The Autopsy of Jane Doe",
      "Candyman",
      "Scanners",
      "The Devil's Backbone",
      "Occulus",
      "Hellraiser",
      "Texas Chainsaw Massacre 2",
      "The Ruins",
      "Thirty",
      "Suspiria",
      "The Grudge",
      "The Fear",
      "The Evil Dead",
      "The Uninvited",
      "The Crazies",
      "The Platform",
      "The Last House on the Left",
      "The Blackcoat's Daughter",
      "The Mummy",
      "The Ring",
      "The Amityville Horror",
      "Thirteen Ghosts",
      "Fright Night",
      "The Conjuring: The Devil Made Me Do It"
    ];
  }

  getRandomMovie() {
    const randomIndex = Math.floor(Math.random() * this.movies.length);
    return this.movies[randomIndex];
  }

  async getMovieDetails(title) {
    try {
      const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${this.apiKey}`);
      const data = await response.json();
      return {
        title: data.Title,
        rating: data.imdbRating,
        director: data.Director,
        description: data.Plot,
        poster: data.Poster 
      };
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return null;
    }
  }
}
