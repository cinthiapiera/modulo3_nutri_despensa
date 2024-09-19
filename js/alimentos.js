//cambia los mostrar 
let alimentosPadre = {
  "verduras": [
    {
      "nombre": "Espinaca",
      "imagen": "https://cdn.pixabay.com/photo/2013/01/05/13/56/real-spinach-73911_640.jpg", 
      "carbohidratos": 3.5,
      "proteinas": 2.9,
      "grasa": 0.4
    },
    {
      "nombre": "Repollo",
      "imagen": "https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_640.jpg", 
      "carbohidratos": 5.4,
      "proteinas": 3.7,
      "grasa": 0.2
    },
    {
      "nombre": "Zanahoria",
      "imagen": "https://cdn.pixabay.com/photo/2017/05/13/15/23/carrot-2309814_640.jpg",
      "carbohidratos": 11.2,
      "proteinas": 1.0,
      "grasa": 0.2
    }, 
    {
      "nombre": "Calabacin",
      "imagen": "https://cdn.pixabay.com/photo/2018/06/17/14/45/zucchini-3480653_640.jpg",
      "carbohidratos": 3.1,
      "proteinas": 1.2,
      "grasa": 0.3
    },
    {
      "nombre": "Pepino",
      "imagen": "https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_640.jpg", 
      "carbohidratos": 3.6,
      "proteinas": 0.7,
      "grasa": 0.1
    },
    {
      "nombre": "Tomate",
      "imagen": "https://cdn.pixabay.com/photo/2022/09/05/09/50/tomatoes-7433786_640.jpg", 
      "carbohidratos": 3.9,
      "proteinas": 0.9,
      "grasa": 0.2
    },
    {
      "nombre": "Lechuga",
      "imagen": "https://cdn.pixabay.com/photo/2018/06/29/07/26/salad-3505392_640.jpg", 
      "carbohidratos": 2.9,
      "proteinas": 1.4,
      "grasa": 0.2
    },
    {
      "nombre": "Ajo",
      "imagen": "https://cdn.pixabay.com/photo/2018/05/21/21/23/garlic-3419544_1280.jpg", 
      "carbohidratos": 24.4,
      "proteinas": 4.3,
      "grasa": 0.2
    },
    {
      "nombre": "Berenjena",
      "imagen": "https://cdn.pixabay.com/photo/2014/01/02/04/31/eggplant-237448_640.jpg", 
      "carbohidratos": 6,
      "proteinas": 1,
      "grasa": 0.2
    },
    {
      "nombre": "Coliflor",
      "imagen": "https://cdn.pixabay.com/photo/2016/06/18/21/56/cauliflower-1465732_640.jpg", 
      "carbohidratos": 5,
      "proteinas": 1.9,
      "grasa": 0.3
    },
    {
      "nombre": "Pimiento rojo",
      "imagen": "https://cdn.pixabay.com/photo/2015/03/13/15/14/paprika-671840_640.jpg", 
      "carbohidratos": 6,
      "proteinas": 1,
      "grasa": 0.3
    },
    {
      "nombre": "Acelga",
      "imagen": "https://cdn.pixabay.com/photo/2016/08/09/13/53/swiss-chard-1580676_640.jpg", 
      "carbohidratos": 3.7,
      "proteinas": 1.8,
      "grasa": 0.2
    },
    {
      "nombre": "Apio",
      "imagen": "https://cdn.pixabay.com/photo/2017/05/05/23/04/leaves-2288485_640.jpg", 
      "carbohidratos": 3,
      "proteinas": 0.7,
      "grasa": 0.2
    },
    {
      "nombre": "Pimenton verde",
      "imagen": "https://cdn.pixabay.com/photo/2016/10/05/17/54/paprika-1717226_640.jpg", 
      "carbohidratos": 6.4,
      "proteinas": 0.9,
      "grasa": 0.2
    },
    {
      "nombre": "Remolacha",
      "imagen": "https://cdn.pixabay.com/photo/2018/06/22/13/52/beetroot-3490809_1280.jpg", 
      "carbohidratos": 9.6,
      "proteinas": 1.6,
      "grasa": 0.2
    },
    {
      "nombre": "Alcachofa",
      "imagen": "https://cdn.pixabay.com/photo/2018/05/10/02/20/artichoke-3386681_640.jpg", 
      "carbohidratos": 3,
      "proteinas": 2.3,
      "grasa": 0.1
    },
    {
      "nombre": "Nabo",
      "imagen": "https://cdn.pixabay.com/photo/2018/02/04/04/45/root-3129065_640.jpg", 
      "carbohidratos": 6.4,
      "proteinas": 0.9,
      "grasa": 0.1
    },
    {
      "nombre": "Cebolla",
      "imagen": "https://cdn.pixabay.com/photo/2020/05/18/15/54/onion-5187140_640.jpg",
      "carbohidratos": 8.6,
      "proteinas": 1.2,
      "grasa": 0.2
    },
    {
      "nombre": "Champiñones",
      "imagen": "https://cdn.pixabay.com/photo/2022/10/31/10/43/mushrooms-7559486_640.jpg", 
      "carbohidratos": 3.3,
      "proteinas": 3.1,
      "grasa": 0.3
    },
    {
      "nombre": "Esparragos",
      "imagen": "https://cdn.pixabay.com/photo/2015/04/26/13/42/vegetable-740446_640.jpg", 
      "carbohidratos": 3.7,
      "proteinas": 2.2,
      "grasa": 0.2
    },
    {
      "nombre": "Perejil",
      "imagen": "https://cdn.pixabay.com/photo/2019/12/11/16/20/parsley-4688651_640.jpg", 
      "carbohidratos": 7.4,
      "proteinas": 4.4,
      "grasa": 0.3
    },
    {
      "nombre": "Col lombarda",
      "imagen": "https://cdn.pixabay.com/photo/2019/11/19/13/21/savoy-4637421_640.jpg", 
      "carbohidratos": 3.4,
      "proteinas": 1.9,
      "grasa": 0.2
    },
    {
      "nombre": "Puerro",
      "imagen": "https://cdn.pixabay.com/photo/2016/04/02/17/36/spring-onions-1303271_640.jpg", 
      "carbohidratos": 3.2,
      "proteinas": 2.1,
      "grasa": 0.2
    },
    {
      "nombre": "Coles de Bruselas",
      "imagen": "https://cdn.pixabay.com/photo/2024/01/18/15/43/cabbage-8517143_640.jpg", 
      "carbohidratos": 4.3,
      "proteinas": 4.2,
      "grasa": 0.5
    },
    {
      "nombre": "Rabano",
      "imagen": "https://cdn.pixabay.com/photo/2020/05/01/12/13/radishes-5116751_640.jpg", 
      "carbohidratos": 3.6,
      "proteinas": 0.6,
      "grasa": 0.5
    }
  ],
  "carnes": [
    {
      "nombre": "Pechuga de pollo",
      "imagen": "https://cdn.pixabay.com/photo/2014/03/05/01/20/chicken-breast-279849_640.jpg", 
      "carbohidratos": 0,
      "proteinas": 20.6,
      "grasa": 3.4
    },
    {
      "nombre": "Bacon",
      "imagen": "https://cdn.pixabay.com/photo/2015/05/16/05/50/ham-769628_640.jpg", 
      "carbohidratos": 0,
      "proteinas": 14.6,
      "grasa": 69.3
    },
    {
      "nombre": "Cabrito",
      "imagen": "", 
      "carbohidratos": 0,
      "proteinas": 19.3,
      "grasa": 4
    },
    {
      "nombre": "Chorizo",
      "imagen": "https://cdn.pixabay.com/photo/2017/05/15/11/54/chorizo-2314640_640.jpg", 
      "carbohidratos": 1.9,
      "proteinas": 21,
      "grasa": 29.3
    },
    {
      "nombre": "Cordero",
      "calorias": 294,
      "carbohidratos": 0,
      "proteinas": 25,
      "grasa": 21
    },
    {
      "nombre": "Chuleta de cerdo",
      "calorias": 196,
      "carbohidratos": 0,
      "proteinas": 26,
      "grasa": 10
    },
    {
      "nombre": "Carne de pato",
      "calorias": 337,
      "carbohidratos": 0,
      "proteinas": 19,
      "grasa": 28
    },
    {
      "nombre": "Bistec de ternera",
      "calorias": 271,
      "carbohidratos": 0,
      "proteinas": 26,
      "grasa": 18
    },
    {
      "nombre": "Jamón",
      "calorias": 145,
      "carbohidratos": 1.5,
      "proteinas": 21,
      "grasa": 6
    },
    {
      "nombre": "Carne de venado",
      "calorias": 158,
      "carbohidratos": 0,
      "proteinas": 30,
      "grasa": 3
    },
    {
      "nombre": "Conejo",
      "calorias": 173,
      "carbohidratos": 0,
      "proteinas": 33,
      "grasa": 3.5
    },
    {
      "nombre": "Carne de bisonte",
      "calorias": 143,
      "carbohidratos": 0,
      "proteinas": 28,
      "grasa": 2.4
    },
    {
      "nombre": "Chorizo",
      "calorias": 455,
      "carbohidratos": 2.7,
      "proteinas": 24,
      "grasa": 38
    },
    {
      "nombre": "Salchicha",
      "calorias": 301,
      "carbohidratos": 1.5,
      "proteinas": 14,
      "grasa": 26
    },
    {
      "nombre": "Pechuga de pato",
      "calorias": 337,
      "carbohidratos": 0,
      "proteinas": 23,
      "grasa": 28
    }
  ],
  "frutosSecos": [
    {
      "nombre": "Almendra",
      "imagen": "https://cdn.pixabay.com/photo/2018/07/08/09/34/almond-3523569_640.jpg", 
      "carbohidratos": 5.3,
      "proteinas": 18.7,
      "grasa": 54
    },
    {
      "nombre": "Avellana",
      "imagen": "https://cdn.pixabay.com/photo/2016/10/01/14/00/hazelnuts-1707601_640.jpg",
      "carbohidratos": 10.5,
      "proteinas": 12,
      "grasa": 61.6
    },
    {
      "nombre": "Mani",
      "imagen": "https://cdn.pixabay.com/photo/2015/02/05/05/58/food-624600_640.jpg",
      "carbohidratos": 7.9,
      "proteinas": 25.2,
      "grasa": 46
    },
    {
      "nombre": "Castaña",
      "imagen": "https://cdn.pixabay.com/photo/2016/11/29/04/14/autumn-1867265_640.jpg",
      "carbohidratos": 36.5,
      "proteinas": 2.6,
      "grasa": 2.2
    },
    {
      "nombre": "Nuez",
      "imagen": "https://cdn.pixabay.com/photo/2016/10/13/22/52/walnuts-1739021_1280.jpg",
      "carbohidratos": 4.4,
      "proteinas": 14.4,
      "grasa": 62.5
    },
    {
      "nombre": "Pistacho",
      "imagen": "https://cdn.pixabay.com/photo/2022/11/06/14/41/pistachio-7574181_640.jpg",
      "carbohidratos": 11.6,
      "proteinas": 17.6,
      "grasa": 51.6
    },
    
  ], 
  "frutas": [ 
    {
    "nombre": "Manzana",
    "imagen": "https://cdn.pixabay.com/photo/2022/09/16/16/09/harvest-7458975_640.jpg",
    "proteinas": 0.3,
    "carbohidratos": 14,
    "grasa": 0.2
  },
  {
    "nombre": "Platano",
    "imagen": "https://cdn.pixabay.com/photo/2015/11/05/23/08/banana-1025109_640.jpg",
    "proteinas": 1.1,
    "carbohidratos": 23,
    "grasa": 0.3
  },
  {
    "nombre": "Naranja",
    "imagen": "https://cdn.pixabay.com/photo/2023/08/16/10/09/oranges-8193789_640.jpg",
    "proteinas": 0.9,
    "carbohidratos": 12,
    "grasa": 0.1
  },
  {
    "nombre": "Fresa",
    "imagen": "https://cdn.pixabay.com/photo/2022/05/27/10/35/strawberry-7224875_1280.jpg",
    "proteinas": 0.7,
    "carbohidratos": 7.7,
    "grasa": 0.3
  },
  {
    "nombre": "Pera",
    "imagen": "https://cdn.pixabay.com/photo/2010/12/13/10/06/food-2280_640.jpg",
    "proteinas": 0.4,
    "carbohidratos": 15,
    "grasa": 0.1
  },
  {
    "nombre": "Sandía",
    "imagen": "https://cdn.pixabay.com/photo/2015/06/19/16/48/watermelon-815072_640.jpg",
    "calorias": 30,
    "proteinas": 0.6,
    "carbohidratos": 8,
    "grasa": 0.2
  },
  {
    "nombre": "Melon",
    "imagen": "https://cdn.pixabay.com/photo/2021/04/19/11/06/melon-6191136_640.jpg",
    "calorias": 34,
    "proteinas": 0.8,
    "carbohidratos": 8.2,
    "grasa": 0.2
  },
  {
    "nombre": "Durazno",
    "imagen": "https://cdn.pixabay.com/photo/2017/08/11/17/41/peach-2632182_1280.jpg",
    "calorias": 39,
    "proteinas": 0.9,
    "carbohidratos": 10,
    "grasa": 0.3
  },
  {
    "nombre": "Piña",
    "imagen": "https://cdn.pixabay.com/photo/2023/12/09/21/03/pineapple-8440180_640.jpg",
    "calorias": 50,
    "proteinas": 0.5,
    "carbohidratos": 13,
    "grasa": 0.1
  },
  {
    "nombre": "Uva",
    "imagen": "https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_1280.jpg",
    "calorias": 69,
    "proteinas": 0.7,
    "carbohidratos": 18,
    "grasa": 0.2
  },
  {
    "nombre": "Mango",
    "imagen": "https://example.com/mango.jpg",
    "calorias": 60,
    "proteinas": 0.8,
    "carbohidratos": 15,
    "grasa": 0.4
  },
  {
    "nombre": "Cereza",
    "imagen": "https://example.com/cereza.jpg",
    "calorias": 63,
    "proteinas": 1.1,
    "carbohidratos": 16,
    "grasa": 0.2
  },
  {
    "nombre": "Limón",
    "imagen": "https://example.com/limon.jpg",
    "calorias": 29,
    "proteinas": 1.1,
    "carbohidratos": 9.3,
    "grasa": 0.3
  },
  {
    "nombre": "Kiwi",
    "imagen": "https://example.com/kiwi.jpg",
    "calorias": 61,
    "proteinas": 1.1,
    "carbohidratos": 15,
    "grasa": 0.5
  },
  {
    "nombre": "Papaya",
    "imagen": "https://example.com/papaya.jpg",
    "calorias": 43,
    "proteinas": 0.5,
    "carbohidratos": 11,
    "grasa": 0.3
  },
  {
    "nombre": "Frambuesa",
    "imagen": "https://example.com/frambuesa.jpg",
    "calorias": 52,
    "proteinas": 1.2,
    "carbohidratos": 12,
    "grasa": 0.7
  },
  {
    "nombre": "Mora",
    "imagen": "https://example.com/mora.jpg",
    "calorias": 43,
    "proteinas": 1.4,
    "carbohidratos": 10,
    "grasa": 0.5
  },
  {
    "nombre": "Granada",
    "imagen": "https://example.com/granada.jpg",
    "calorias": 83,
    "proteinas": 1.7,
    "carbohidratos": 19,
    "grasa": 1.2
  },
  {
    "nombre": "Coco",
    "imagen": "https://example.com/coco.jpg",
    "calorias": 354,
    "proteinas": 3.3,
    "carbohidratos": 15,
    "grasa": 33
  },
  {
    "nombre": "Guayaba",
    "imagen": "https://example.com/guayaba.jpg",
    "calorias": 68,
    "proteinas": 2.6,
    "carbohidratos": 14,
    "grasa": 0.9
  },
  {
    "nombre": "Aguacate",
    "imagen": "https://example.com/aguacate.jpg",
    "calorias": 160,
    "proteinas": 2,
    "carbohidratos": 9,
    "grasa": 15
  },
  {
    "nombre": "Arándano",
    "imagen": "https://example.com/arandano.jpg",
    "calorias": 57,
    "proteinas": 0.7,
    "carbohidratos": 14,
    "grasa": 0.3
  },
  {
    "nombre": "Higo",
    "imagen": "https://example.com/higo.jpg",
    "calorias": 74,
    "proteinas": 0.8,
    "carbohidratos": 19,
    "grasa": 0.3
  },
  {
    "nombre": "Litchi",
    "imagen": "https://example.com/litchi.jpg",
    "calorias": 66,
    "proteinas": 0.8,
    "carbohidratos": 17,
    "grasa": 0.4
  },
  {
    "nombre": "Mandarina",
    "imagen": "https://example.com/mandarina.jpg",
    "calorias": 53,
    "proteinas": 0.8,
    "carbohidratos": 13,
    "grasa": 0.3
  },
  {
    "nombre": "Toronja",
    "imagen": "https://example.com/toronja.jpg",
    "calorias": 42,
    "proteinas": 0.8,
    "carbohidratos": 10.7,
    "grasa": 0.1
  },
  {
    "nombre": "Chirimoya",
    "imagen": "https://example.com/chirimoya.jpg",
    "calorias": 75,
    "proteinas": 1.6,
    "carbohidratos": 18,
    "grasa": 0.7
  },
  {
    "nombre": "Tamarindo",
    "imagen": "https://example.com/tamarindo.jpg",
    "calorias": 239,
    "proteinas": 2.8,
    "carbohidratos": 63,
    "grasa": 0.6
  },
  {
    "nombre": "Níspero",
    "imagen": "https://example.com/nispero.jpg",
    "calorias": 47,
    "proteinas": 0.4,
    "carbohidratos": 12,
    "grasa": 0.2
  },
  {
    "nombre": "Albaricoque",
    "imagen": "https://example.com/albaricoque.jpg",
    "calorias": 48,
    "proteinas": 1.4,
    "carbohidratos": 11,
    "grasa": 0.4
  }

  ],
  "mariscos": [ {
    "nombre": "Almeja",
    "imagen": "",
    "carbohidratos": 1.5,
    "proteinas": 15.5,
    "grasa": 1
  }, {
    "nombre": "Anchoa",
    "imagen": "",
    "carbohidratos": 0.5,
    "proteinas": 21.5,
    "grasa": 6
  },
  {
    "nombre": "Anguila",
    "imagen": "",
    "carbohidratos": 0,
    "proteinas": 15,
    "grasa": 24.5
  },
  {
    "nombre": "Besugo",
    "imagen": "",
    "carbohidratos": 0,
    "proteinas": 18,
    "grasa": 1.8
  },
  {
    "nombre": "Caballa",
    "imagen": "",
    "carbohidratos": 0,
    "proteinas": 18.6,
    "grasa": 12
  },
  {
    "nombre": "Calamar",
    "imagen": "",
    "carbohidratos": 0.7,
    "proteinas": 16,
    "grasa": 1.5
  },
  {
    "nombre": "Cangrejo",
    "imagen": "",
    "carbohidratos": 0,
    "proteinas": 19.5,
    "grasa": 15.5
  },
  {
    "nombre": "Langosta",
    "imagen": "",
    "carbohidratos": 1.3,
    "proteinas": 17,
    "grasa": 1
  },
  {
    "nombre": "Langostino",
    "imagen": "",
    "carbohidratos": 0,
    "proteinas": 24.3,
    "grasa": 0.8
  },
  {
    "nombre": "Trucha",
    "imagen": "",
    "carbohidratos": 0,
    "proteinas": 18.7,
    "grasa": 6.7
  },
  {
    "nombre": "Sardina",
    "imagen": "",
    "carbohidratos": 0,
    "proteinas": 18,
    "grasa": 9.5
  },
  {
    "nombre": "Salmon",
    "imagen": "",
    "carbohidratos": 0,
    "proteinas": 20.6,
    "grasa": 12
  },
  {
    "nombre": "Pulpo",
    "imagen": "",
    "carbohidratos": 0,
    "proteinas": 18,
    "grasa": 1.5
  },
  {
    "nombre": "Mejillon",
    "imagen": "",
    "carbohidratos": 2.3,
    "proteinas": 10,
    "grasa": 2
  }

  ]
}
//alimentosPadre.verduras.forEach(verdura => {
  //cardContainer.innerHTML += `<img src="${verdura.imagen}" alt="${verdura.nombre}">`;
//});
function buscarAlimento() {
  let Proteinas = parseFloat(document.getElementById("tipo-proteina").value);   
  let Carbohidratos = parseFloat(document.getElementById("tipo-carbohidratos").value); 
  let Grasa = parseFloat(document.getElementById("tipo-grasa").value);   
  let IngredienteUsuario = document.getElementById("input-ingredientes").value.toLowerCase();
  //console.log(proteinas, carbohidratos, grasa, ingredienteUsuario);
  let cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ''; // Limpiar
  // Función para mostrar alimentos 
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
    
    cardContainer.innerHTML += card;
  }

  // Buscar por texto del ingrediente
  if (IngredienteUsuario !== "") {
      let alimentoEncontrado = 
      alimentosPadre.verduras.find(verdura => verdura.nombre.toLowerCase() === IngredienteUsuario) ||
      alimentosPadre.carnes.find(carne => carne.nombre.toLowerCase() === IngredienteUsuario) ||
      alimentosPadre.frutosSecos.find(fruto => fruto.nombre.toLowerCase() === IngredienteUsuario) ||
      alimentosPadre.frutas.find(fruta => fruta.nombre.toLowerCase() === IngredienteUsuario) ||
      alimentosPadre.mariscos.find(marisco => marisco.nombre.toLowerCase() === IngredienteUsuario);
      
      if (alimentoEncontrado) {
          mostrarAlimento2(alimentoEncontrado, true, true, true);
      } else {
          cardContainer.innerHTML = '<p>No esta el alimento ingresado.</p>';
      }
      return;
  }

  // Buscar por proteinas
  if (Proteinas > 0 && Carbohidratos === 0 && Grasa === 0) {
      const categorias = ['carnes', 'verduras', 'frutas', 'frutosSecos', 'mariscos'];
      categorias.forEach(categoria => {
        let proteinaEncontrado = alimentosPadre[categoria].filter(alimento => alimento.proteinas < Proteinas);
        proteinaEncontrado.forEach(alimento => mostrarAlimento2(alimento, false, false, true));
      });
      return;
  }

  // Buscar por carbohidratos
  if (Carbohidratos > 0 && Proteinas === 0 && Grasa === 0) {
      const categorias = ['carnes', 'verduras', 'frutas', 'frutosSecos', 'mariscos'];

      categorias.forEach(categoria => {
          let carbohidratoEncontrado = alimentosPadre[categoria].filter(alimento => alimento.carbohidratos < Carbohidratos);
          carbohidratoEncontrado.forEach(alimento => mostrarAlimento2(alimento,false, true, false));
      });
      return;
  }

  // Buscar por grasa
  if (Grasa > 0 && Carbohidratos === 0 && Proteinas === 0) {
      const categorias = ['carnes', 'verduras', 'frutas', 'frutosSecos', 'mariscos'];

      categorias.forEach(categoria => {
          let grasaEncontrado = alimentosPadre[categoria].filter(alimento => alimento.grasa < Grasa);
          grasaEncontrado.forEach(alimento => mostrarAlimento2(alimento, true, false, false));
      });
      return;
  }

  // Buscar por los 3 filtros 
  if (Grasa > 0 && Carbohidratos > 0 && Proteinas > 0) {
      const categorias = ['carnes', 'verduras', 'frutas', 'frutosSecos', 'mariscos'];
      let alimentosEncontrados = [];

      categorias.forEach(categoria => {
          let encontrados = alimentosPadre[categoria].filter(alimento => 
              alimento.grasa < Grasa && 
              alimento.carbohidratos < Carbohidratos && 
              alimento.proteinas < Proteinas
          );
          encontrados.forEach(alimento => alimentosEncontrados.push(alimento));
      });

      if (alimentosEncontrados.length > 0) {
          alimentosEncontrados.forEach(alimento => mostrarAlimento2(alimento, true, true, true));
      } else {
          cardContainer.innerHTML = '<p>No existe un alimento con esas opciones</p>';
      }
      return;
  }

  // Buscar por 2 filtros 
  if ((Grasa > 0 && Carbohidratos > 0) || (Proteinas > 0 && Carbohidratos > 0) || (Proteinas > 0 && Grasa > 0)) {
      const categorias = ['carnes', 'verduras', 'frutas', 'frutosSecos', 'mariscos'];

      categorias.forEach(categoria => {
          let filtrados = alimentosPadre[categoria].filter(alimento => {
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

  // Si no se seleccionó ninguna opción válida
  if (Proteinas === 0 && Carbohidratos === 0 && Grasa === 0 && IngredienteUsuario === "") {
      cardContainer.innerHTML = '<p>Ingrese un alimento o seleccione una opcion de busqueda.</p>';
  }
}