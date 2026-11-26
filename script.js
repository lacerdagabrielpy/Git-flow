
const formulario = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;

    if (nome === "" || email === "" || telefone === "" || senha === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.textContent = "Digite um e-mail válido!";
        mensagem.style.color = "red";
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

    formulario.reset();
});
