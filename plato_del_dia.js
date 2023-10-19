document.addEventListener("DOMContentLoaded", function () {
    // Reemplaza 'YOUR_EDAMAM_APP_ID' y 'YOUR_EDAMAM_APP_KEY' con tus credenciales reales de la API de Edamam.
    const appId = 'de6f5afc';
    const appKey = '1e36694aecdd4c0ca9b51467b8627232';

    const recipeContainer = document.getElementById("recipe-container");

    // Función para obtener el plato del día desde Edamam
    async function fetchDailyRecipe() {
        try {
            const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=Plato%20del%20d%C3%ADa&app_id=TU_APP_ID&app_key=TU_APP_KEY`);

            const data = await response.json();

            // Verifica si se encontró un plato del día y muestra los detalles
            if (data.parsed && data.parsed.length > 0) {
                const dailyRecipe = data.parsed[0];

                // Muestra los detalles del plato del día
                recipeContainer.innerHTML = `
                    <h2>${dailyRecipe.food.label}</h2>
                    <p>Calorías: ${dailyRecipe.food.nutrients.ENERC_KCAL.toFixed(2)} kcal</p>
                    <p>Proteínas: ${dailyRecipe.food.nutrients.PROCNT.toFixed(2)} g</p>
                    <p>Grasas: ${dailyRecipe.food.nutrients.FAT.toFixed(2)} g</p>
                    <p>Carbohidratos: ${dailyRecipe.food.nutrients.CHOCDF.toFixed(2)} g</p>
                `;
            } else {
                recipeContainer.innerHTML = "No se encontró información para el plato del día.";
            }
        } catch (error) {
            recipeContainer.innerHTML = "Error al cargar la información del plato del día. Por favor, inténtalo de nuevo más tarde.";
            console.error(error);
        }
    }

    // Llama a la función fetchDailyRecipe cuando la página se carga
    fetchDailyRecipe();
});

