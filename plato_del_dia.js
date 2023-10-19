document.addEventListener("DOMContentLoaded", function () {
    // Replace 'YOUR_EDAMAM_APP_ID' and 'YOUR_EDAMAM_APP_KEY' with your actual Edamam API credentials.
    const appId = 'de6f5afc';
    const appKey = '1e36694aecdd4c0ca9b51467b8627232';

    const recipeContainer = document.getElementById("recipe-container");

    // Function to fetch a random recipe from Edamam
    async function fetchRandomRecipe() {
        try {
            const response = await fetch(`https://api.edamam.com/search?q=*&app_id=${appId}&app_key=${appKey}`);
            const data = await response.json();

            // Get a random recipe from the response
            const randomRecipe = data.hits[Math.floor(Math.random() * data.hits.length)].recipe;

            // Display the recipe details on the page
            recipeContainer.innerHTML = `
                <h2>${randomRecipe.label}</h2>
                <p>Ingredients:</p>
                <ul>
                    ${randomRecipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join("")}
                </ul>
                <p><a href="${randomRecipe.url}" target="_blank">View Full Recipe</a></p>
            `;
        } catch (error) {
            console.error(error);
        }
    }

    // Call the fetchRandomRecipe function when the page loads
    fetchRandomRecipe();
});
