let number = document.getElementById('cn');
let btn = document.getElementById('btn');

// Llamando a la función
btn.addEventListener('click', () => {
  let value = number.value;
  validCard(value) ? alert('valido!') : alert('invalido!');
});
