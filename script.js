Js
function calcularIMC() {
 const peso = document.getElementById('peso').value;
 const altura = document.getElementById('altura').value / 100;
 const imc = (peso / (altura * altura)).toFixed(2);
 document.getElementById('resultado').innerText = `Tu IMC es ${imc}`;
}


function calcularIMC() {
 const peso = document.getElementById('peso').value;
 const altura = document.getElementById('altura').value / 100;
 const imc = (peso / (altura * altura)).toFixed(2);
 let mensaje;
 if (imc < 18.5) {
 mensaje = "Tu IMC es " + imc + ". Estás bajo de peso. Consulta con un nutricionista para
una dieta adecuada.";
 } else if (imc >= 18.5 && imc < 24.9) {
 mensaje = "Tu IMC es " + imc + ". Tienes un peso normal. Mantén una dieta equilibrada.";
 } else if (imc >= 25 && imc < 29.9) {
 mensaje = "Tu IMC es " + imc + ". Tienes sobrepeso. Considera una dieta balanceada y
ejercicio regular.";
 } else {
	 
	  mensaje = "Tu IMC es " + imc + ". Estás en obesidad. Consulta con un especialista para una
dieta y plan de ejercicio.";
 }
 document.getElementById('resultado').innerText = mensaje;
}
