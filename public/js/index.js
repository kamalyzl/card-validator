'use strict';

// Utilizamos el patron IIFE, Expresión de función inmediatamente invocada, función anonima auto ejecutable
// Así prevenimos el Hoisting

(function () {
  // Objeto Card contiene función ValidCard
  var card = {
    validCard: function validCard(number) {
      var sum = 0,
          alt = false,
          i = number.length - 1,
          // recorriendo de manera inversa
      num = void 0;
      if (number.length !== 16) {
        return false;
      }
      while (i >= 0) {
        num = parseInt(number.charAt(i), 10); // obteniendo el segundo digito    
        if (isNaN(num)) {
          return false;
        }
        if (alt) {
          num *= 2;
          if (num > 9) {
            num = num % 10 + 1;
          }
        }
        alt = !alt;
        sum += num;
        i--;
      }
      // retora si es valida  
      return sum % 10 === 0;
    }
  };
  // Para proteger los datos realizamos lo siguiente
  if (typeof window.card === 'undefined') {
    window.card = window.card = card;
  } else console.log('hiciste uso de la libreria');
})();