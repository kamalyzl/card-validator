'use strict';

// Llamando al DOM
var btn = document.getElementById('btn');

// Trayendo valores de los inputs
btn.addEventListener('click', function () {
  var cardNumber = document.getElementById('cn').value,
      name = document.getElementById('name').value,
      yy = document.getElementById('YY').value,
      mm = document.getElementById('MM').value,
      cvv = document.getElementById('cvv').value;

  // Obteniendo los datos de  l cliente en base a su número de tarjeta
  if (card.validCard(cardNumber)) {
    var client = persona.filter(function (val) {
      return val.number === cardNumber;
    })[0];
    // Solo pasará a validar los siguientes datos si se encuentra el número de tarjeta ingresado en la data
    if (client) {
      // Validando si los demás inputs son correctos
      if (client.name === name && client.cvv === cvv && client.yy === yy && client.mm === mm) {
        alert('Datos correctos');
      } else alert('Los datos no coinciden con el número de tarjeta');
    } else alert('Los datos no se encuentran en la base de datos');
  } else {
    alert('Ingrese datos');
  }
});