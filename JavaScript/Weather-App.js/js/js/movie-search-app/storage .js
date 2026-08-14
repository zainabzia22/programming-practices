const FAVORITES_KEY = "favoriteMovies";

// Get favorites from Local Storage
export const getFavorites = () => {

    try {

        const movies = localStorage.getItem(FAVORITES_KEY);

        return movies ? JSON.parse(movies) : [];

    } catch (error) {

        console.error("Error reading Local Storage:", error);

        return [];
    }
};


// Save favorites
export const saveFavorites = (movies) => {

    try {

        localStorage.setItem(
            FAVORITES_KEY,
            JSON.stringify(movies)
        );

    } catch (error) {

        console.error("Error saving favorites:", error);
    }
};


// Add movie to favorites
export const addFavorite = (movie) => {

    const favorites = getFavorites();

    const alreadyExists = favorites.some(
        favorite => favorite.imdbID === movie.imdbID
    );

    if (!alreadyExists) {

        favorites.push(movie);

        saveFavorites(favorites);
    }
};


// Remove movie from favorites
export const removeFavorite = (movieId) => {

    const favorites = getFavorites();

    const updatedFavorites = favorites.filter(
        movie => movie.imdbID !== movieId
    );

    saveFavorites(updatedFavorites);
};