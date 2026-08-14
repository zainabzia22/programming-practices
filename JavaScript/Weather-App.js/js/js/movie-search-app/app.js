import { searchMovies } from "./api.js";

import {
    getFavorites,
    addFavorite,
    removeFavorite
} from "./storage.js";

import {
    displayMovies,
    displayFavorites,
    showError,
    clearError
} from "./ui.js";


// Get HTML elements
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");


// Search movies
const handleSearch = async () => {

    const query = searchInput.value.trim();

    clearError();

    // Validate input
    if (!query) {

        showError("Please enter a movie name.");

        return;
    }

    try {

        searchBtn.disabled = true;

        searchBtn.textContent = "Searching...";

        const movies = await searchMovies(query);

        displayMovies(movies, handleAddFavorite);

    } catch (error) {

        showError(error.message);

    } finally {

        searchBtn.disabled = false;

        searchBtn.textContent = "Search";
    }
};


// Add favorite movie
const handleAddFavorite = (movie) => {

    addFavorite(movie);

    loadFavorites();

    alert(`${movie.Title} added to favorites!`);
};


// Remove favorite movie
const handleRemoveFavorite = (movieId) => {

    removeFavorite(movieId);

    loadFavorites();
};


// Load favorites
const loadFavorites = () => {

    const favorites = getFavorites();

    displayFavorites(
        favorites,
        handleRemoveFavorite
    );
};


// Search button event
searchBtn.addEventListener("click", handleSearch);


// Enter key event
searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        handleSearch();
    }
});


// Load favorites when application starts
loadFavorites();