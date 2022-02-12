var titulo = document.querySelector(".titulo");
var botao = document.querySelector("#adicionar-paciente");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var imc = calculaImc(peso, altura)
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;
    ValidaImc(imc)
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function ValidaImc(imc) {
    if (imc > 25 || imc <= 0) {
        return false;
    }
    return true;
}