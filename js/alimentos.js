function traerTodo() {
  $.ajax({
    type : "GET",
    url: "../json/alimentos.json",
    datatype: "JSON",
    async: true, 
    success : function (data) {
            mostrarinfo(data) 
    } 
  })
}
function mostrarinfo(data) {
  console.log(data);
}

$(document).ready(function () {
  traerTodo(); 
})