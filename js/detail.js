// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {
  //Esta es la instruccion para tomar el id del URL detail.html?id=<identificador>
  let sct = location.search.match(/id=(\d)*/)[1];

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: '/info.json',
  }).done(function (result) {
    //Guarda el resultado en una variable
    events = result.events;

    //Busca el elemento en el arreglo
    event = events.find(function (element) {
      return element.id == sct;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    const html = `
      <div class='event'>
      <h2>${event.name}</h2>
      \n<p class='date'>${event.date} - ${event.place}</p>
      \n<p class='description'>${event.description}</p>
      \n<p class='price'>Costo: ${event.price}</p>
      \n<p class='guests'>Invitados: ${event.guests}</p>`;

    //Modifica el DOM agregando el html generado dentro del div con id=event
    document.querySelector('#event').innerHTML = html;
  });
});
