const API_KEY = "YOUR_API_KEY";

const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// ES6 arrow function
export const searchMovies = async (query) => {

    try {

        const response = await fetch(
            `${BASE_URL}&s=${encodeURIComponent(query)}`
        );

        // Error handling
        if (!response.ok) {
            throw new Error("Network error. Please try again.");
        }

        // Convert response to JSON
        const data = await response.json();

        if (data.Response === "False") {
            throw new Error(data.Error || "Movie not found.");
        }

        return data.Search;

    } catch (error) {

        console.error("API Error:", error);

        throw error;
    }
};git