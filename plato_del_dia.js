// Reemplaza 'YOUR_EDAMAM_APP_ID' y 'YOUR_EDAMAM_APP_KEY' con tus credenciales de Edamam.
const appId = 'fd13d35f';
const appKey = '16e58865487ba117829d12763c195ceb';

const recipeContainer = document.getElementById("recipe-container");

async function fetchRandomRecipe() {
    try {
        const response = await fetch(`https://api.edamam.com/search?q=*&app_id=${appId}&app_key=${appKey}`);
        const data = await response.json();
        const randomRecipe = data.hits[Math.floor(Math.random() * data.hits.length)].recipe;

        document.getElementById('recipe-title').textContent = randomRecipe.label;
        document.getElementById('recipe-instructions').textContent = randomRecipe.url;

    } catch (error) {
        console.error(error);
    }
}

window.addEventListener('load', fetchRandomRecipe);


