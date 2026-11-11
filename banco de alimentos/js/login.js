const form = document.querySelector('#loginForm');
const email = document.querySelector('#username');
const senha = document.querySelector('#password');
const mensagem = document.querySelector('#mensagem-login');

form.addEventListener('submit', function(event) {

    event.preventDefault(); // Impede o envio do formulário

    const emailValue = email.value.trim(); // Obtém o valor do campo de e-mail e remove espaços em branco
    const senhaValue = senha.value.trim(); // Obtém o valor do campo de senha e remove espaços em branco

    if (emailValue === '' || senhaValue === '') {
        mensagem.textContent = 'Por favor, preencha todos os campos antes de enviar o formulário.'; // Exibe a mensagem de sucesso
        mensagem.style.display = 'block'; // Exibe a mensagem
        return; // Sai da função se algum campo estiver vazio
    }

    else {

        window.location.href = new URL('../../index.html', window.location.href).href;

    }



});