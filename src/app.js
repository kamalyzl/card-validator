const cl = console.log; // Para realizar pruebas en etapa de desarrollo

// Iteramos el objeto persona y devolvemos un array de cada una de sus popiedades

let dateName = personas.map((val, index, array) => cl(val === joalbert)),
  dateNumber = personas.map((val, index, array) => cl(val.number)),
  dateCvv = personas.map((val, index, array) => cl(val.cvv)),
  dateFechExp = personas.map((val, index, array) => cl(val.fechExp));

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
  if ($.validCard(val) && val.length === 16) {
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
  for (const value of personas) {
    cl(val);
    cl(personas);
    cl(value.name);
    if (val === value.name && val.length > 3) {
      verifyName = true;
      cl(verifyName);
      btnActive();
      return true;
    } else {
      btnDesactive();
      return false;
    }
  }

};

// Función que valida CVV, solo permite 3 digitos
let validCvv = () => {
  let cvv = document.getElementById('cvv');
  let value = cvv.value;
  for (const val of dateCvv) {
    if (value === val) {
      verifyCvv = true;
      cvv.setAttribute('disabled', true);
      btnActive();
    } else {
      btnDesactive();
    }
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

button = () => {
  alert('valido!');
};
// Eventos
cvv.addEventListener('keyup', validCvv);
name.addEventListener('keyup', validName);
number.addEventListener('keyup', validNumber);
exp.addEventListener('change', validExp);
btn.addEventListener('click', button);
