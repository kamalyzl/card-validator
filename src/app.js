 
// Llamando al DOM
const btn = document.getElementById('btn'),
  cardNumber = document.getElementById('cn'),
  name = document.getElementById('name'),
  yy = document.getElementById('YY'),
  mm = document.getElementById('MM'),
  cvv = document.getElementById('cvv');


// Trayendo valores de los inputs
btn.addEventListener('click', function() {
  const valCard = cardNumber.value, valName = name.value, valYY = yy.value, valMM = mm.value, valCvv = cvv.value;
  // Obteniendo los datos de  l cliente en base a su número de tarjeta
  if (card.validCard(valCard)) {
    const client = persona.filter((val) => val.number === valCard)[0];
    // Solo pasará a validar los siguientes datos si se encuentra el número de tarjeta ingresado en la data
    if (client) {
      // Validando si los demás inputs son correctos
      if (client.name === valName && client.cvv === valCvv && client.yy === valYY && client.mm === valMM) {
        alert('Datos correctos');
      } else alert('Los datos no coinciden con el número de tarjeta');
    } else alert('Los datos no se encuentran en la base de datos');
  } else {
    alert('Ingrese datos');
  }
});