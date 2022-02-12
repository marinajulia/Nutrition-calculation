var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xrh = new XMLHttpRequest();
    xrh.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xrh.addEventListener("load", function(){
        var resposta = xrh.responseText;
        var pacientes = JSON.parse(resposta);
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    })
    xrh.send();
})