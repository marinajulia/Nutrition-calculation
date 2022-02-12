var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {

        for (var i = 0; i < pacientes.length; i++) {
            paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //i para aceitar letras maiúculas e minusculas na busca
            
            if(!expressao.test(nome))
            if (nome != this.value) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++) {
            paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

})