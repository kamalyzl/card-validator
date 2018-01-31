const cl = console.log; // Para realizar pruebas en etapa de desarrollo

// Iteramos el objeto persona y devolvemos un array de cada una de sus popiedades

let dateName = persona.map((val, index, array) => val.name),
  dateNumber = persona.map((val, index, array) => val.number),
  dateCvv = persona.map((val, index, array) => val.cvv),
  dateFechExp = persona.map((val, index, array) => val.fechExp);
  cl(dateName);

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
  for (const value of dateName) {
    if (val === value) {
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
// exp.addEventListener('change', validExp);
btn.addEventListener('click', button);


/*
// Llamando a la data 
document.getElementById('send').addEventListener('click', function () {
  // Trayendo valores de los inputs
  const cardNumber = document.getElementById('card-number').value;
  const cvv = parseInt(document.getElementById('cvv').value);
  const name = document.getElementById('name').value;

  // Obteniendo los datos del cliente en base a su número de tarjeta
  const client = persona.filter((val) => val.number == cardNumber)[0];

  // Solo pasará a validar los siguientes datos si se encuentra el número de tarjeta ingresado en la data
  if (client) {
    // Validando si los demás inputs son correctos
    if (client.name == name && client.cvv == cvv) {
      console.log(client.name);
      console.log(client.cvv);
      console.log('este usuario es correcto');
    }
  } else {
    console.log('El usuario no es válido');
  }
});
*/