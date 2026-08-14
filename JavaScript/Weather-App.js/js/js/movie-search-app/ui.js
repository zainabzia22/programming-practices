// Get HTML elements
const movieContainer = document.querySelector("#movieContainer");
const favoritesContainer = document.querySelector("#favoritesContainer");


// Display movies
export const displayMovies = (movies, onFavoriteClick) => {

    movieContainer.innerHTML = "";

    if (!movies || movies.length === 0) {

        movieContainer.innerHTML =
            `<p class="empty-message">No movies found.</p>`;

        return;
    }

    movies.forEach(movie => {

        const card = createMovieCard(
            movie,
            "❤️ Add to Favorites"
        );

        const button = card.querySelector(".favorite-btn");

        button.addEventListener("click", () => {
            onFavoriteClick(movie);
        });

        movieContainer.appendChild(card);
    });
};


// Display favorite movies
export const displayFavorites = (movies, onRemoveClick) => {

    favoritesContainer.innerHTML = "";

    if (movies.length === 0) {

        favoritesContainer.innerHTML =
            `<p class="empty-message">
                No favorite movies yet.
            </p>`;

        return;
    }

    movies.forEach(movie => {

        const card = createMovieCard(
            movie,
            "❌ Remove Favorite"
        );

        const button = card.querySelector(".favorite-btn");

        button.classList.add("remove-btn");

        button.addEventListener("click", () => {
            onRemoveClick(movie.imdbID);
        });

        favoritesContainer.appendChild(card);
    });
};


// Create movie card
const createMovieCard = (movie, buttonText) => {

    const card = document.createElement("div");

    card.classList.add("movie-card");

    const poster = movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/300x450?text=No+Poster";

    card.innerHTML = `
        <img
            src="${poster}"
            alt="${movie.Title}"
        >

        <div class="movie-info">

            <h3>${movie.Title}</h3>

            <p>
                <strong>Year:</strong>
                ${movie.Year}
            </p>

            <p>
                <strong>Type:</strong>
                ${movie.Type}
            </p>

            <button class="favorite-btn">
                ${buttonText}
            </button>

        </div>
    `;

    return card;
};


// Display error
export const showError = (message) => {

    const errorMessage = document.querySelector("#errorMessage");

    errorMessage.textContent = message;
};


// Clear error
export const clearError = () => {

    const errorMessage = document.querySelector("#errorMessage");

    errorMessage.textContent = "";
};