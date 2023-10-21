// Obtener el elemento de fecha actual
const fechaActual = new Date();

// Obtener el día de la semana (0 para domingo, 1 para lunes, etc.)
const diaDeLaSemana = fechaActual.getDay();

// Array de URLs de recetas para cada día de la semana
const urlsRecetas = [
  "../plato_del_dia/lunes.html",
  "../plato_del_dia/martes.html",
  "../plato_del_dia/miercoles.html",
  "../plato_del_diajueves.html",
  "../plato_del_dia/viernes.html",
  "../plato_del_dia/sabado.html",
  "../plato_del_dia/domingo.html",
];

// Redirigir al usuario a la página de receta correspondiente
if (diaDeLaSemana >= 0 && diaDeLaSemana < urlsRecetas.length) {
  window.location.href = urlsRecetas[diaDeLaSemana];
} else {
  // Si el día de la semana no coincide con ninguna URL, redirigir a una página por defecto
  window.location.href = "pagina_no_disponible.html";
}
