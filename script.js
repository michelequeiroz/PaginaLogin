const usuario = document.getElementById("tx-usuario");
const senha = document.getElementById("tx-senha");
const botao = document.getElementById("bt-enviar"); 

usuario.addEventListener("focusout", function() {
    if(usuario.value.trim() == ""){
        alert("O Campo Usuario deve ser preenchido!");
    }
});

senha.addEventListener("focusout", function() {
    if(senha.value.trim() == ""){
        alert("O Campo Senha deve ser preenchido!");
    }
});

botao.addEventListener("click", function(event){
    if(usuario.value.trim() == "" || senha.value.trim() == ""){
        alert("O formulário contém dados inválidos!");
        event.preventDefault(); //impede que o form seja enviado
    }
});
