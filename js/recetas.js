function buscarRecetas() {
    const ingredientes = $('#input-ingredientes').val();
    const tipoCocina = $('#tipo-cocina').val();
    const tiempoPreparacion = $('#tiempo-preparacion').val();
    const tipoComida = $('#tipo-comida').val();
    $('#instrucciones-filtro').hide();

    const apiKey = '38f82ca70b0c408ab8c681caf1e4908f'; 
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=20`;


    if (ingredientes) {
        url += `&includeIngredients=${encodeURIComponent(ingredientes)}`;
    }
    if (tipoCocina) {

        if (tipoCocina === 'gluten-free' || tipoCocina === 'dairy-free') {
            url += `&intolerances=${encodeURIComponent(tipoCocina)}`;
        } else if (tipoCocina === 'sustainable') {
            url += `&sustainable=true`;
        }
    }
    if (tiempoPreparacion) {
        url += `&maxReadyTime=${encodeURIComponent(tiempoPreparacion)}`;
    }
    if (tipoComida) {

        switch (tipoComida) {
            case 'desayuno':
                url += `&type=breakfast`;
                break;
            case 'almuerzo':
                url += `&type=main course`; 
                break;
            case 'cena':
                url += `&type=dinner`;
                break;
            case 'postre':
                url += `&type=dessert`;
                break;
            default:
                break; 
        }
    }


    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            mostrarRecetas(data.results);
        },
        error: function(error) {
            console.error('Error al obtener recetas:', error);
            alert('Ocurrió un error al obtener las recetas. Inténtalo de nuevo.');
        }
    });
}


function mostrarRecetas(recetas) {
    const cardContainer = $('#card-container');
    cardContainer.empty(); 
    console.log(recetas);
    
    if (recetas.length === 0) {
        cardContainer.html('<p>No se encontraron recetas.</p>');
        return;
    }

    recetas.forEach(receta => {
        const recetaCard = $(`
            <div class="card">
                <img src="${receta.image}" alt="${receta.title}">
                <div class="card-content">
                    <h3 class="card-title">${receta.title}</h3>
                    <p><strong>ID:</strong> ${receta.id}</p> <!-- Mostrar el ID de la receta -->
                    <p>${receta.summary.substring(0, 100)}...</p>
                    <a href="instrucciones.html?id=${receta.id}" class="card-button">Ver receta</a> <!-- Cambiar enlace aquí -->
                </div>
            </div>
        `);
        cardContainer.append(recetaCard);
    });
}
