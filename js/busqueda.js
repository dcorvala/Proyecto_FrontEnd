document.getElementById("formulario_busqueda").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("query").value;
    const appId = 'de6f5afc'; 
    const appKey = '1e36694aecdd4c0ca9b51467b8627232'; 
    const resultsContainer = document.getElementById("results");

    resultsContainer.innerHTML = "Buscando recetas..."; 

    
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`)

        .then(response => response.json())
        .then(data => {
            resultsContainer.innerHTML = ""; 

            const hits = data.hits;
            if (hits.length === 0) {
                resultsContainer.innerHTML = "No se encontraron recetas para esta búsqueda.";
            } else {
                hits.forEach(hit => {
                    const recipe = hit.recipe;
                    const recipeHtml = `
                        <div class="recipe">
                            <h3>${recipe.label}</h3>
                            <img src="${recipe.image}" alt="${recipe.label}">
                            <p>Calorías: ${recipe.calories.toFixed(2)}</p>
                            <p>Porciones: ${recipe.yield}</p>
                            <a href="${recipe.url}" target="_blank">Ver receta</a>
                        </div>
                    `;
                    resultsContainer.innerHTML += recipeHtml;
                });
            }
        })
        .catch(error => {
            console.error(error);
            resultsContainer.innerHTML = "Se produjo un error al buscar recetas.";
        });
});

