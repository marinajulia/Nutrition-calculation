var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500)
})


// funciona, mas não para os novos cadastros pq não estavam na página quando foi carregado:
// var pacientes = document.querySelectorAll(".paciente");
// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });