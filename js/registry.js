// Hemos omitido los acentos en los comentarios por compatibilidad

function validation(form) {
  if (form.names.value.trim().length == 0) {
    document.getElementById('errorName').innerText = 'Campo obligatorio';
    form.names.focus();
    return false;
  }

  if (form.names.value.trim().length < 3) {
    document.getElementById('errorName').innerText =
      'El nombre debe contener más de 3 cáracteres';
    return false;
  }

  //Expresion regular del correo
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(form.email.value)) {
    document.getElementById('errorEmail').innerText = 'Email inválido';
    return false;
  }
  return true;
}
