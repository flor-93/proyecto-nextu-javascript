// Hemos omitido los acentos en los comentarios por compatibilidad
//Define las variables que necesites
let date;
let events = [];

let past;
let firstPast;

let future;
let firstFuture;

$(document).ready(function () {
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: 'http://127.0.0.1:8080/info.json',
  }).done(function (result) {
    //Guarda el resultado en variables
    events = result.events;
    date = result.currentDate;

    //Clasifica los eventos segun la fecha actual del JSON
    future = events.filter((event) => event.date > date);

    past = events.filter((event) => event.date < date);

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    future.sort(function (a, b) {
      a = new Date(a.date);
      b = new Date(b.date);
      return a < b ? -1 : a > b ? 1 : 0;
    });

    //Extrae solo dos eventos
    firstFuture = future.slice(0, 2);

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    past.sort(function (a, b) {
      a = new Date(a.date);
      b = new Date(b.date);
      return a > b ? -1 : a < b ? 1 : 0;
    });

    //Extrae solo dos eventos
    firstPast = past.slice(0, 2);

    //Crea un string que contenga el HTML que describe el detalle del evento
    htmlFuture = '';

    //Recorre el arreglo y concatena el HTML para cada evento
    for (let i = 0; i < firstFuture.length; i++) {
      htmlFuture += `
      <div class='firstEvents'>
      <a href='detail.html?id=${future[i].id}'><h2>${future[i].name}</h2></a>
      \n<p class='date'>${future[i].date}</p>
      \n<p class='description'>${future[i].description}</p></div>`;
    }

    //Modifica el DOM agregando el html generado
    document.querySelector('#next').innerHTML = htmlFuture;

    //Crea un string que contenga el HTML que describe el detalle del evento
    htmlPast = '';

    //Recorre el arreglo y concatena el HTML para cada evento
    for (let i = 0; i < firstPast.length; i++) {
      htmlPast += `
      <div class='firstEvents'>
      <a href='detail.html?id=${past[i].id}'><h2>${past[i].name}</h2></a>
      \n<p class='date'>${past[i].date}</p>
      \n<p class='description'>${past[i].description}</div>`;
    }

    //Modifica el DOM agregando el html generado
    document.querySelector('#past').innerHTML = htmlPast;
  });
});
