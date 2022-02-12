var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    var xrh = new XMLHttpRequest();
    xrh.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xrh.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xrh.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xrh.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            erroAjax.classList.remove();
        }
    })
    xrh.send();
})