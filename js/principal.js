var titulo = document.querySelector(".titulo");
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(){
    console.log("Eu fui clicado");
});

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var imc = peso / (altura * altura);
    
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc.toFixed(2);
    
    if(imc > 25){
        paciente.classList.add("paciente-invalido");
    }
}



