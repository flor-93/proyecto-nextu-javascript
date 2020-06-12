//Define las variables que necesites
let date;
let event = [];
let past;

$(document).ready(function () {
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: '/info.json',
  }).done(function (result) {
    //Guarda el resultado en variables
    events = result.events;
    date = result.currentDate;

    //Selecciona los eventos que sean anteriores a la fecha actual del JSON
    past = events.filter((event) => event.date < date);

    //Ordena los eventos segun la fecha (los mas recientes primero)
    past.sort(function (a, b) {
      a = new Date(a.date);
      b = new Date(b.date);
      return a > b ? -1 : a < b ? 1 : 0;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    html = '';

    //Recorre el arreglo y concatena el HTML para cada evento
    for (let i = 0; i < past.length; i++) {
      html += `
      <div class='event'>
      <a href='detail.html?id=${past[i].id}'><h2>${past[i].name}</h2></a>
      \n<p class='date'>${past[i].date} - ${past[i].place}</p>
      \n<p class='description'>${past[i].description}</p>
      \n<p class='price'>Invitados: ${past[i].guests}</p></div>`;
    }

    //Modifica el DOM agregando el html generado
    document.querySelector('#event').innerHTML = html;
  });
});
