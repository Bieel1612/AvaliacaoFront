function calcular() {

let valor1 = Number(document.getElementById("valor1").value);
let valor2 = Number(document.getElementById("valor2").value);

let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;

let resultado = document.getElementById("resultado");

if (valor2 === 0) {

resultado.innerHTML =
   "<p>Soma: " + soma + "</p>" +
   "<p>Subtração: " + subtracao + "</p>" +
   "<p>Multiplicação: " + multiplicacao + "</p>" +
   "<p>Divisão: não é possível dividir por zero.</p>";

} else {

let divisao = valor1 / valor2;

  resultado.innerHTML =
    "<p>Soma: " + soma + "</p>" +
    "<p>Subtração: " + subtracao + "</p>" +
    "<p>Multiplicação: " + multiplicacao + "</p>" +
    "<p>Divisão: " + divisao + "</p>";
    }
}