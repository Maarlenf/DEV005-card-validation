const validator = {
  //...
  
  //`validator.isValid(creditCardNumber)`: `creditCardNumber` es un `string`
  //con el número de tarjeta que se va a verificar. Esta función debe retornar
  //un `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
  isValid(num){
    const arreglo = num.split('');
    //console.log(arreglo);
    const parMul = [];
    //console.log(parMul);
    const imPar= [];
    //console.log(imPar);
    
    //*---------sacar par,multiplicar y sumar multiplo
    for(let i = 1; i <= arreglo.length-1; i = i + 2){
      let par= [];
      par = (arreglo[i] * 2);
    

      if (par >= 10){
        //console.log(par - 9);
        parMul.push(par - 9);
      }else{
        //console.log(par);
        parMul.push(par);
      }
    }  
    //*----------sacar impar
    for(let i = 0; i < arreglo.length; i = i + 2){
      //console.log(arreglo[i]);
      let impar= [];
      impar = Number(arreglo[i]);
      //console.log(impar);
      imPar.push(impar);
    }
    //*----------sumar pares
    const valor= 0;
    //console.log(parMul);
    const sumaPar = parMul.reduce((accumulator,currentValue) => accumulator + currentValue,valor);
    //console.log(sumaPar);
    //*---------sumar impares
    const sumaIm= imPar.reduce((accumulator,currentValue) => accumulator + currentValue,valor);
    //console.log(sumaIm + sumaPar);
    //*---------sumar ambos
    const numerosJuntos=[];
    numerosJuntos.push(sumaPar);
    numerosJuntos.push(sumaIm);
    //console.log(numerosJuntos);
    const sumados= numerosJuntos.reduce((accumulator,currentValue) => accumulator + currentValue,valor);
    // console.log(sumados);

    if(sumados % 10 === 0){
      return true
    }else{
      return false
    }

  },

  //- `validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` con
  //el número de tarjeta y esta función debe retornar un `string` donde todos menos
  //los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
  //Esta función deberá siempre mantener los últimos cuatro caracteres
  //intactos, aún cuando el `string` sea de menor longitud.
  maskify(num){
    const trae= num;
    //console.log(typeof trae, trae);
    const enmascarar= trae.slice(-4).padStart(trae.length,'#');
    return enmascarar;
  }
}
    
export default validator;
