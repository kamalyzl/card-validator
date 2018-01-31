const cl = console.log; // Para realizar pruebas en etapa de desarrollo

// Llamando al DOM
let number = document.getElementById('cn'),
  btn = document.getElementById('btn'),
  name = document.getElementById('name'),
  exp = document.getElementById('exp'),
  cvv = document.getElementById('cvv');

// Variables booleanas para validacion
let verifyNumber = false, verifyName = false, verifyCvv = false, verifyExp = false;

// Función que condiciona el número de tarjeta
let validNumber = () => {
  let val = number.value;
  if (card.validCard(val) && val.length === 16) {
    btnActive();
    verifyNumber = true;
    return true;
  } else {
    btnDesactive();
    return false;
  }
};
// Función que valida solo texto para el nombre
let validName = () => {
  let name = document.getElementById('name');
  let val = name.value;
  let regex = /^[a-zA-Z\s]*$/;
  if (regex.test(val) && val.length > 3) {
    verifyName = true;
    btnActive();
    return true;
  } else {
    btnDesactive();
    return false;
  }
};

// Función que valida CVV, solo permite 3 digitos
let validCvv = () => {
  let cvv = document.getElementById('cvv');
  let value = cvv.value;
  let regex = /^\d{3}/;
  if (regex.test(value)) {
    verifyCvv = true;
    cvv.setAttribute('disabled', true);
    btnActive();
  } else {
    btnDesactive();
  }
};

// Función que valida fecha de expiracion
let validExp = () => {
  let exp = document.getElementById('exp');
  let val = exp.value;
  if (val) {
    verifyExp = true;
    btnActive();
  } else {
    btnDesactive();
  }
};

// Función que activa el botón
btnActive = () => {
  if (verifyNumber && verifyName && verifyCvv && verifyExp) {
    btn.disabled = false;
  }
};

// Función que desactiva el botón
btnDesactive = () => {
  btn.disabled = true;
};

// Eventos
cvv.addEventListener('keyup', validCvv);
name.addEventListener('keyup', validName);
number.addEventListener('keyup', validNumber);
exp.addEventListener('change', validExp);
btn.addEventListener('click', button);


console.log(joalbert.name);
// console.log(joalbert.cvv);
// console.log(joalbert.fechExp);
// console.log(mariana);
// console.log(alejandra);