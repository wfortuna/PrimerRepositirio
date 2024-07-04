Js
function calcularIMC() {
 const peso = document.getElementById('peso').value;
 const altura = document.getElementById('altura').value / 100;
 const imc = (peso / (altura * altura)).toFixed(2);
 document.getElementById('resultado').innerText = `Tu IMC es ${imc}`;
}
