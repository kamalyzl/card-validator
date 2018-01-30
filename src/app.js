
let number = document.getElementById('cn');
let btn = document.getElementById('btn');
let name = document.getElementById('name');
let exp = document.getElementById('exp');
let cvv = document.getElementById('cvv');

// Evento final, indicamos si los datos son correctos
btn.addEventListener('click', () => {
  let value = number.value;
  validCard(value) ? alert('valido!') : alert('invalido!'); // validCard es la función
});

// Evento que valida si existe solo texto
name.addEventListener('keyup', () => {
  let name = document.getElementById('name');
  let val = name.value;
  let regex = /^[a-zA-Z\s]*$/;
  if (regex.test(val)) {
    return true;
  } else {
    return false;
  }
});

// Evento que valida si ingresa 3 numeros, caso contrario desabilita el campo 
cvv.addEventListener('keyup', () => {
  let cvv = document.getElementById('cvv');
  let value = cvv.value;
  let regex = /^\d{3}/;
  if (regex.test(value)) {
    cvv.setAttribute('disabled', true);
  } else {
    // ...
  }
});

