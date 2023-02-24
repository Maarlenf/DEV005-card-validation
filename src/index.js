import validator from "./validator.js";

const form1 = document.getElementById("form1");
form1.addEventListener("submit", (event) => {
  event.preventDefault();

  const creditCardNumber = document.getElementById("textTarjeta").value;
  document.getElementById("ok").innerHTML =
    "Tus números de tarjeta son " + creditCardNumber;
  //console.log(typeof creditCardNumber, creditCardNumber);

  const validar = validator.isValid(creditCardNumber);
  //console.log(validar);
  const mascara = validator.maskify(creditCardNumber);
  if (validar === true) {
    document.getElementById("ok").innerHTML = "Tu tarjeta es válida " + mascara;
  } else {
    document.getElementById("ok").innerHTML =
      "Tu tarjeta NO es válida" + mascara;
  }
});

//console.log(validator);
