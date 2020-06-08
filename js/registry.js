// Hemos omitido los acentos en los comentarios por compatibilidad

function validation(form) {
  if (form.names.value.trim().length == 0) {
    document.querySelector('#errorName').innerHTML =
      'Este campo es obligatorio';
    form.names.focus();
    return false;
  }

  if (form.names.value.trim().length < 3) {
    document.querySelector('#errorName').innerHTML =
      'El nombre debe contener más de 3 cáracteres';
    return false;
  }

  if (form.names.value.trim().length > 3) {
    document.querySelector('#errorName').innerHTML = '';
    form.email.focus();
  }

  if (form.email.value.trim().length == 0) {
    document.querySelector('#errorEmail').innerHTML =
      'Este campo es obligatorio';
    return false;
  }

  //Expresion regular del correo
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(form.email.value)) {
    document.querySelector('#errorEmail').innerHTML = 'Campo inválido';
    return false;
  }

  if (re.test(form.email.value)) {
    document.querySelector('#errorEmail').innerHTML = '';
    form.password.focus();
  }

  if (form.password.value.trim().length == 0) {
    document.querySelector('#errorPassword').innerHTML =
      'Este campo es obligatorio';
    return false;
  }

  if (form.password.value.trim().length >= 7) {
    document.querySelector('#errorPassword').innerHTML = '';
    form.confirmation.focus();
  }

  if (form.password.value.trim().length < 7) {
    document.querySelector('#errorPassword').innerHTML =
      'Debe tener al menos 7 cáracteres';
    return false;
  }

  if (form.password.value.trim().length > 7) {
    document.querySelector('#errorPassword').innerHTML = '';
  }

  if (form.password.value != form.confirmation.value) {
    document.querySelector('#errorConfirmation').innerHTML =
      'No coincide con la contraseña';
    return false;
  }

  if (form.password.value === form.confirmation.value) {
    document.querySelector('#errorConfirmation').innerHTML = '';
    form.type.focus();
  }

  if (form.type.value == '') {
    document.querySelector('#errorType').innerHTML =
      'Este campo es obligatorio';
    return false;
  } else {
    document.querySelector('#errorType').innerHTML = '';
  }

  if (!form.accept.checked) {
    document.querySelector('#errorAccept').innerHTML =
      'Este campo es obligatorio';
    return false;
  }

  if (form.accept.checked) {
    document.querySelector('#errorAccept').innerHTML = '';
  }

  alert('Datos enviados');

  return true;
}
