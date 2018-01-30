'use strict';

var number = document.getElementById('cn');
var btn = document.getElementById('btn');

// Llamando a la función
btn.addEventListener('click', function () {
  var value = number.value;
  validCard(value) ? alert('valido!') : alert('invalido!');
});