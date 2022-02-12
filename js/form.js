botao.addEventListener("click", function () {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    if(!validaPaciente(paciente)){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = "IMC inválido"
        return;
    }
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
});

function obtemPacienteDoFormulario(form) {
    return paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); //adiciona a classe 

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    if(ValidaImc(paciente.imc)){
        return true
    }
    return false;
}

// exemplo de Push(para adicionar no array:)
// var erros = [];
// if("" === "") erros.push("erro");
// if("" === "") erros.push("mais um erro para adicionar no array");