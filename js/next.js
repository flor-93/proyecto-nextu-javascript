// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
let date;
let event = [];
let next;

$(document).ready(function () {
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: '/info.json',
  }).done(function (result) {
    //Guarda el resultado en variables
    events = result.events;
    date = result.currentDate;

    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    next = events.filter((event) => event.date > date);
    console.log('Próximos eventos: ', next);

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    next.sort(function (a, b) {
      a = new Date(a.date);
      b = new Date(b.date);
      return a < b ? -1 : a > b ? 1 : 0;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    html = '';

    //Recorre el arreglo y concatena el HTML para cada evento
    for (let i = 0; i < next.length; i++) {
      html += `
      <div class='event'>
      <a href='detail.html?id=${next[i].id}'><h2>${next[i].name}</h2></a>
      \n<p class='date'>${next[i].date} - ${next[i].place}</p>
      \n<p class='description'>${next[i].description}</p>
      \n<p class='price'>Costo: ${next[i].price}</p></div>`;
    }

    //Modifica el DOM agregando el html generado dentro del div con id=event
    document.querySelector('#event').innerHTML = html;
  });
});
