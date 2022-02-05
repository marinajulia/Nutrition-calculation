var titulo = document.querySelector(".titulo");
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var pesoTd = document.createElement("td");
    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

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



