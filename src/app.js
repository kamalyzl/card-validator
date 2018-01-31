const cl = console.log;
let number = document.getElementById('cn'),
  btn = document.getElementById('btn'),
  name = document.getElementById('name'),
  exp = document.getElementById('exp'),
  cvv = document.getElementById('cvv');

let verifyNumber = false, verifyName = false, verifyCvv = false, verifyExp = false;
// validCard es la función
let validNumber = () => {
  let val = number.value;
  if (validCard(val) && val.length === 16) {
    btnActive();
    verifyNumber = true;
    return true;
  } else {
    btnDesactive();
    return false;
  }
};
// Evento que valida si existe solo texto
let validName = () => {
  let name = document.getElementById('name');
  let val = name.value;
  let regex = /^[a-zA-Z\s]*$/;
  if (regex.test(val) && val.length > 3) {
    verifyName = true;
    btnActive();
    return true;
  } else {
    btnDesactive();
    return false;
  }
};

// Evento que valida si ingresa 3 numeros, caso contrario desabilita el campo 
let validCvv = () => {
  let cvv = document.getElementById('cvv');
  let value = cvv.value;
  let regex = /^\d{3}/;
  if (regex.test(value)) {
    verifyCvv = true;
    cvv.setAttribute('disabled', true);
    btnActive();
  } else {
    btnDesactive();
  }
};

// Evento que valida la fecha de expiracion
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

btnActive = () => {
  if (verifyNumber && verifyName && verifyCvv && verifyExp) {
    btn.disabled = false;
  }
};
btnDesactive = () => {
  btn.disabled = true;
};

button = () => {
  alert('valido!');
};
cvv.addEventListener('keyup', validCvv);
name.addEventListener('keyup', validName);
number.addEventListener('keyup', validNumber);
exp.addEventListener('change', validExp);
btn.addEventListener('click', button);