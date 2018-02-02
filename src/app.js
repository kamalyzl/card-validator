
// Llamando al DOM
const btn = document.getElementById('btn');
const cardNumber = document.getElementById('cn');

//Declaramos las variables
name = document.getElementById('name');
yy = document.getElementById('YY');
mm = document.getElementById('MM');
cvv = document.getElementById('cvv');

// Trayendo valores de los inputs
btn.addEventListener('click', function() {
  /*
  const cardNumber = document.getElementById('cn').value,
    name = document.getElementById('name').value,
    yy = document.getElementById('YY').value,
    mm = document.getElementById('MM').value,
    cvv = document.getElementById('cvv').value;
    */

  // Obteniendo los datos de  l cliente en base a su número de tarjeta
  if (card.validCard(cardNumber)) {
    const client = persona.filter((val) => val.number === cardNumber)[0];
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


//Creando las validaciones para el input Number of card
var inputNumber = document.getElementById('cn');

const onlyNum = /[^0-9]/g;
const onlypLet = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;

inputNumber.addEventListener('input', function () {
  inputNumber.value = inputNumber.value.replace(onlyNum, '');

});


/*
function validarNumCard(numeroTarjeta) {
  soloNumero(numeroTarjeta);
  cantidadNumeros(numeroTarjeta);
}

function soloNumero(numeroTarjeta) {
  numeroTarjeta.value = numeroTarjeta.value.replace(expNum,'');
}

function cantidadNumeros(numeroTarjeta) {
  numeroTarjeta
}

*/