var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
    event.target.parentNode.remove();
})


// funciona, mas não para os novos cadastros pq não estavam na página quando foi carregado:
// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });