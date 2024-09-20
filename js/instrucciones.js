$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const recetaId = params.get('id');

    if (!recetaId) {
        $('#receta-info').html('<p>ID de receta no encontrado.</p>');
    } else {
        const apiKey = '38f82ca70b0c408ab8c681caf1e4908f';
        const url = `https://api.spoonacular.com/recipes/${recetaId}/information?apiKey=${apiKey}`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                mostrarInformacionReceta(data);
            },
            error: function () {
                $('#receta-info').html('<p>Ocurrió un error al obtener la receta. Inténtalo de nuevo.</p>');
            }
        });
    }

    function mostrarInformacionReceta(receta) {
        $('#receta-info').html(`
            <div class="card">
                <img src="${receta.image}" alt="${receta.title}" class="card-image">
                <div class="card-content">
                    <h1 class="card-title">${receta.title}</h1>
                    <p><strong>ID:</strong> ${receta.id}</p>
                    <p><strong>Resumen:</strong> ${receta.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p> 
                    <p><strong>Tipo de plato:</strong> ${receta.dishTypes.join(', ')}</p>
                    <p><strong>Tiempo de preparación:</strong> ${receta.readyInMinutes} minutos</p>
                    <p><strong>Porciones:</strong> ${receta.servings}</p>
                    <h2>Preparación</h2>
                    <p>${receta.instructions || 'Instrucciones no disponibles.'}</p>
                    <h2>Ingredientes</h2>
                    <ul>
                        ${receta.extendedIngredients.map(ingrediente => `<li>${ingrediente.original}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `);
    }
});