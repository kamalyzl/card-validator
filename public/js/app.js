'use strict';

var cl = console.log; // Para realizar pruebas en etapa de desarrollo

// Iteramos el objeto persona y devolvemos un array de cada una de sus popiedades

var dateName = persona.map(function (val, index, array) {
    return val.name;
  }),
  dateNumber = persona.map(function (val, index, array) {
    return val.number;
  }),
  dateCvv = persona.map(function (val, index, array) {
    return val.cvv;
  }),
  dateFechExp = persona.map(function (val, index, array) {
    return val.fechExp;
  });
cl(dateName);

// Llamando al DOM
var number = document.getElementById('cn'),
  btn = document.getElementById('btn'),
  name = document.getElementById('name'),
  exp = document.getElementById('exp'),
  cvv = document.getElementById('cvv');

// Variables booleanas para validacion
var verifyNumber = false,
  verifyName = false,
  verifyCvv = false,
  verifyExp = false;

// Función que condiciona el número de tarjeta
var validNumber = function validNumber() {
  var val = number.value;
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
var validName = function validName() {
  var name = document.getElementById('name');
  var val = name.value;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dateName[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

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
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

// Función que valida CVV, solo permite 3 digitos
var validCvv = function validCvv() {
  var cvv = document.getElementById('cvv');
  var value = cvv.value;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = dateCvv[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var val = _step2.value;

      if (value === val) {
        verifyCvv = true;
        cvv.setAttribute('disabled', true);
        btnActive();
      } else {
        btnDesactive();
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

// Función que valida fecha de expiracion
var validExp = function validExp() {
  var exp = document.getElementById('exp');
  var val = exp.value;
  if (val) {
    verifyExp = true;
    btnActive();
  } else {
    btnDesactive();
  }
};

// Función que activa el botón
btnActive = function btnActive() {
  if (verifyNumber && verifyName && verifyCvv && verifyExp) {
    btn.disabled = false;
  }
};

// Función que desactiva el botón
btnDesactive = function btnDesactive() {
  btn.disabled = true;
};

button = function button() {
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