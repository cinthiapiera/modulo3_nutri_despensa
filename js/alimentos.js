function buscarAlimento(){
  $.ajax({
    type: "GET",
    url: "../json/alimentos.json",
    datatype: "json",
    async: true, 
    success: function (data) {
      mostrarinfo(data); 
    } 
  }); 
}

function mostrarinfo(data) {
  console.log(data);
  let Proteinas = parseFloat($("#tipo-proteina").val());   
  console.log(Proteinas);
  
  let Carbohidratos = parseFloat($("#tipo-carbohidratos").val()); 
  let Grasa = parseFloat($("#tipo-grasa").val());
  let IngredienteUsuario = $("#input-ingredientes").val().toLowerCase();
  let categoriaElegida = $("#tipo-alimento").val();
  console.log(categoriaElegida);
  
  let $cardContainer = $("#card-container");

  $cardContainer.empty(); //Limpia

  function mostrarAlimento2(alimento, mostrarGrasa, mostrarCarbohidratos, mostrarProteinas) {
    let etiquetas = ''; 
    if (mostrarGrasa) {
      etiquetas += `<p>Grasa: ${alimento.grasa} g</p>`;
    }
    if (mostrarCarbohidratos) {
      etiquetas += `<p>Carbohidratos: ${alimento.carbohidratos} g</p>`;
    }
    if (mostrarProteinas) {
      etiquetas += `<p>Proteínas: ${alimento.proteinas} g</p>`;
    }
    let card = `
      <div class="card">
        <h3>${alimento.nombre}</h3>
        <img src="${alimento.imagen}" alt="${alimento.nombre}">
        ${etiquetas}
      </div>
    `;

    $cardContainer.append(card); 
  }

  // Buscar por nombre del ingrediente
  if (IngredienteUsuario !== "") {
    let alimentoEncontrado = 
      data.verduras.find(verdura => verdura.nombre.toLowerCase() === IngredienteUsuario) ||
      data.carnes.find(carne => carne.nombre.toLowerCase() === IngredienteUsuario) ||
      data.frutosSecos.find(fruto => fruto.nombre.toLowerCase() === IngredienteUsuario) ||
      data.frutas.find(fruta => fruta.nombre.toLowerCase() === IngredienteUsuario) ||
      data.mariscos.find(marisco => marisco.nombre.toLowerCase() === IngredienteUsuario);

    if (alimentoEncontrado) {
      mostrarAlimento2(alimentoEncontrado, true, true, true);
    } else {
      $cardContainer.html('<p class = "NoAlimento">No está el alimento ingresado.</p>');
    }
    return;
  }

  // Buscar por proteina 
  if (Proteinas > 0 && Carbohidratos == 0 && Grasa == 0) {
    const categorias = ['carnes', 'verduras', 'frutas', 'frutosSecos', 'mariscos'];
      categorias.forEach(categoria => {
        let proteinaEncontrado = data[categoria].filter(alimento => alimento.proteinas < Proteinas);
        proteinaEncontrado.forEach(alimento => mostrarAlimento2(alimento, false, false, true));
      });
      return;
  }

  // Buscar por carbohidratos
  if (Carbohidratos > 0 && Proteinas === 0 && Grasa === 0) {
    const categorias = ['carnes', 'verduras', 'frutas', 'frutosSecos', 'mariscos'];
    categorias.forEach(categoria => {
      let carbohidratoEncontrado = data[categoria].filter(alimento => alimento.carbohidratos < Carbohidratos);
      carbohidratoEncontrado.forEach(alimento => mostrarAlimento2(alimento, false, true, false));
    });
    return;
  }

  // Buscar por grasa
  if (Grasa > 0 && Carbohidratos === 0 && Proteinas === 0) {
    const categorias = ['carnes', 'verduras', 'frutas', 'frutosSecos', 'mariscos'];
    categorias.forEach(categoria => {
      let grasaEncontrado = data[categoria].filter(alimento => alimento.grasa < Grasa);
      grasaEncontrado.forEach(alimento => mostrarAlimento2(alimento, true, false, false));
    });
    return;
  }

  // Buscar por los tres filtros
  if (Grasa > 0 && Carbohidratos > 0 && Proteinas > 0) {
    const categorias = ['carnes', 'verduras', 'frutas', 'frutosSecos', 'mariscos'];
    let alimentosEncontrados = [];

    categorias.forEach(categoria => {
      let encontrados = data[categoria].filter(alimento => 
        alimento.grasa < Grasa && 
        alimento.carbohidratos < Carbohidratos && 
        alimento.proteinas < Proteinas
      );
      encontrados.forEach(alimento => alimentosEncontrados.push(alimento));
    });

    if (alimentosEncontrados.length > 0) {
      alimentosEncontrados.forEach(alimento => mostrarAlimento2(alimento, true, true, true));
    } else {
      $cardContainer.html('<p>No existe un alimento con esas opciones.</p>');
    }
    return;
  }

  // Buscar por dos filtros combinados
  if ((Grasa > 0 && Carbohidratos > 0) || (Proteinas > 0 && Carbohidratos > 0) || (Proteinas > 0 && Grasa > 0)) {
    const categorias = ['carnes', 'verduras', 'frutas', 'frutosSecos', 'mariscos'];
    categorias.forEach(categoria => {
      let filtrados = data[categoria].filter(alimento => {
        if (Grasa > 0 && Carbohidratos > 0) {
          return alimento.grasa < Grasa && alimento.carbohidratos < Carbohidratos;
        } else if (Proteinas > 0 && Carbohidratos > 0) {
          return alimento.proteinas < Proteinas && alimento.carbohidratos < Carbohidratos;
        } else if (Proteinas > 0 && Grasa > 0) {
          return alimento.proteinas < Proteinas && alimento.grasa < Grasa;
        }
        return false;
      });

      filtrados.forEach(alimento => {
        if (Grasa > 0 && Carbohidratos > 0) {
          mostrarAlimento2(alimento, true, true, false);
        } else if (Proteinas > 0 && Carbohidratos > 0) {
          mostrarAlimento2(alimento, false, true, true);
        } else if (Proteinas > 0 && Grasa > 0) {
          mostrarAlimento2(alimento, true, false, true);
        }
      });
    });
    return;
  }

  //Buscar por categoria 
  if(categoriaElegida != 0){
    let alimentosEncontrados = data[categoriaElegida];
    console.log(alimentosEncontrados);
    
    if (alimentosEncontrados && alimentosEncontrados.length > 0) {
      alimentosEncontrados.forEach(alimento => mostrarAlimento2(alimento, true, true, true));
    }
    return;
  }

  //si es que el usuario no ingreso nada
  if (Proteinas == 0 && Carbohidratos == 0 && Grasa == 0 && IngredienteUsuario == "") {
    $cardContainer.html('<p>Ingrese un alimento o seleccione una opción de búsqueda.</p>');
  }
}


document.querySelector('button[onclick="buscarAlimento()"]').addEventListener('click', function() {
  var instrucciones = document.querySelector('.instrucciones-filtro');
  if (instrucciones) {
      instrucciones.style.display = 'none'; 
  }
});