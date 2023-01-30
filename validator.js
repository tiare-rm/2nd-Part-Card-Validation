const validator = {
  isValid: (numeros) => {
    //funciones dentro de un objeto
    const arrayinvertido = []; //reversa del array
    for (let i = numeros.length - 1; i >= 0; i--) {
      //recorre el array revertido
      arrayinvertido.push(numeros[i]);
    }
    //console.log(arrayinvertido); //muestra numeros revertidos en consola

    const doblepares = []; //doble de cada digito par
    //console.log(doblepares); //muestra la multiplicación de los numeros pares
    //let suma = [];
    const sumadigitos = [];
    let sumatodosdigitos = 0;
    //console.log(sumatodosdigitos);
    for (let b = 0; b < arrayinvertido.length; b++) {
      if (b % 2 === 0) {
        //console.log(b);
        //modulo identificación pares e impares
        sumadigitos[b] = parseInt(arrayinvertido[b]); //devolución entera de la suma hecha
      } else {
        doblepares[b] =
          parseInt(arrayinvertido[b]) + parseInt(arrayinvertido[b]);
        if (doblepares[b] >= 10) {
          //Suma de los digitos multiplicados
          sumadigitos[b] = doblepares[b] - 10 + 1;
        } else {
          sumadigitos[b] = doblepares[b];
        }
      }
      sumatodosdigitos = sumatodosdigitos + parseInt(sumadigitos[b]); //suma de los numeros dados
    }
    //console.log(doblepares);
    //console.log(sumadigitos);
    //console.log(sumatodosdigitos);
    if (sumatodosdigitos % 10 === 0) {
      //suma digitos finales en un multiplo de 10, convirtiendo en boleano
      return true;
    } else {
      return false;
    }
  },
  //console.log(algoritmoLuhn(creditCardNumber));
  //return algoritmoLuhn(creditCardNumber)

  maskify: function (cardnumber) {
    const cardNumString = cardnumber.split(""); //atrapar el value en una variable por siaca, sigue siendo un array
    const stringLength = cardNumString.length - 5; // le sacamos 4 caracteres para enmascarar
    for (let i = 0; i <= stringLength; i++) {
      cardNumString[i] = "#"; //for que recorre cardNumString las veces que stringLenght y cambia el valor a #
    }
    return cardNumString.join(""); //.join me permite unir los elementos de un array en un string
  },
};

export default validator;
