let persona = [
  {
    number: '4373471036301103',
    name: 'Joalbert',
    cvv: 123,
    fechExp: '2018-01'

  }, {
    number: '4851519931403589',
    name: 'Mariana',
    cvv: 456,
    fechExp: '2018-02'

  }, {
    number: '4578565808288696',
    name: 'Alejandra',
    cvv: 789,
    fechExp: '2018-03'

  }
];

document.getElementById('send').addEventListener('click', function() {
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