// La parte del Main ----------------

var botonInfo = document.getElementById('boton-info');
var botonVolver = document.getElementById('boton-volver');
var primeraSeccion = document.getElementById('primera-seccion');
var segundaSeccion = document.getElementById('segunda-seccion');

botonInfo.addEventListener('click', function() {
  primeraSeccion.style.display = 'none';
  segundaSeccion.style.display = 'block';
});

botonVolver.addEventListener('click', function() {
  primeraSeccion.style.display = 'block';
  segundaSeccion.style.display = 'none';
});



//  Recetas                     
// Obtener los elementos necesarios
const recetasSection = document.getElementById('recetas');
const recetaPplesSection = document.getElementById('receta-pples');
const recetaContent = document.querySelectorAll('#receta-pples .container > div');

// Agregar evento de clic a cada imagen
recetasSection.addEventListener('click', (event) => {
  var target = event.target;
  if (target.tagName === 'IMG') {
    // Obtener el contenedor de la receta seleccionada
    //const selectedReceta = target.parentNode.parentNode;
    
    // Obtener el nombre de la receta seleccionada
    //const selectedRecetaName = selectedReceta.getAttribute('data-receta');
    selectedRecetaName = target.getAttribute("id");

    // Ocultar la sección de las recetas y mostrar la receta correspondiente
    recetasSection.style.display = 'none';
    recetaPplesSection.style.display = 'block';

    // Mostrar la receta seleccionada y ocultar las demás
    recetaContent.forEach(receta => {
      //const recetaName = receta.getAttribute('data-receta');
      var recetaName = receta.getAttribute('data-receta');
      if (recetaName === selectedRecetaName) {
        receta.style.display = 'block';
      } else {
        receta.style.display = 'none';
      }
    });
  }
});

// Agregar evento de clic al botón "Volver" en cada receta
const volverBtns = document.querySelectorAll('.volver-btn');
volverBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Mostrar la sección de las recetas y ocultar la receta
    recetasSection.style.display = 'block';
    recetaPplesSection.style.display = 'none';
  });
});





// Footer ----------------------------------

var seccionFooter = document.getElementById('footer');
var tarjetaDesarrollador = document.getElementById('card');
var desarrolladoPorSam = document.getElementById('desarrollado-por-sam');

desarrolladoPorSam.addEventListener('click', function() {
  seccionFooter.style.display = 'none';
  tarjetaDesarrollador.style.display = 'block';
});

tarjetaDesarrollador.addEventListener('click', function() {
  seccionFooter.style.display = 'block';
  tarjetaDesarrollador.style.display = 'none';
});

desarrolladoPorSam.addEventListener('mouseover', function() {
  desarrolladoPorSam.style.fontSize = 'larger';
});

desarrolladoPorSam.addEventListener('mouseout', function() {
  desarrolladoPorSam.style.fontSize = 'initial';
});

