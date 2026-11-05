const botaoEnviar = document.querySelector('#btn-env');
const mensagem = document.querySelector('#mensagem');

// Adiciona um evento de clique ao botão de envio para confirmação de envio da mensagem
botaoEnviar.addEventListener('click', function() {

    mensagem.textContent = 'Mensagem enviada com sucesso!';
    mensagem.style.display = 'block'; // Exibe a mensagem

    form.reset(); // Limpa os campos do formulário

});



const form = document.querySelector('#form-duvida');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const tipoDuvida = document.querySelector('#tipo-duvida');


// Verifica se todos os campos estão preenchidos antes de enviar o formulário
form.addEventListener('submit', function(event) {

    event.preventDefault(); // Impede o envio do formulário
    const texto = nome.value.trim(); // Obtém o valor do campo de texto e remove espaços em branco
    const emailValue = email.value.trim(); // Obtém o valor do campo de e-mail e remove espaços em branco
    const tipoDuvidaValue = tipoDuvida.value; // Obtém o valor do campo de seleção

    if (texto === '' || emailValue === '' || tipoDuvidaValue === '') {
        alert('Por favor, preencha todos os campos antes de enviar o formulário.');
        return; // Sai da função se algum campo estiver vazio
    }


});
    
