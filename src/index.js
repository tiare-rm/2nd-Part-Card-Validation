import validator from "./validator.js";

//console.log(validator);

const button = document.getElementById("botonvalidar"); //invoco al button del html para llamar la accion

function isValid() {
  const cardNumber = document.getElementById("cardnumber").value;
 
  if (cardNumber === "" || isNaN(cardNumber) === true) {
    alert("No ha ingresado número de tarjeta válida");
  }
  const valid = validator.isValid(cardNumber); //parametro de la funcion
  if (valid === true) {
    alert("Tarjeta válida, tu compra se está validando");
  } else {
    alert("Tarjeta Inválida");
  }
}

function maskify() {
  // funcion para enmascarar el numero
  const cardnumber = document.getElementById("cardnumber").value;
  const arrayMask = validator.maskify(cardnumber);
  //console.log(arrayMask);
  document.getElementById("cardnumber").value = arrayMask;
}

button.addEventListener("click", () => {
  isValid();
  maskify();
});

//document.getElementById("cardnumber").addEventListener("keypress", maskify); no lo usé al final
