const botaoAbrir = document.querySelector('#abrir-form-financeiro');
const formularioContainer = document.querySelector('#form-financeiro');
const formulario = document.querySelector('#formulario-financeiro');
const cancelar = document.querySelector('#cancelar-financeiro');

const mensagem = document.querySelector('#mensagem-financeira');
const modalSucesso = document.querySelector('#modal-sucesso');

const fecharSucesso = document.querySelector('#fechar-sucesso');
const nome = document.querySelector('#nome-financeiro');
const email = document.querySelector('#email-financeiro');
const valorFinanceiro = document.querySelector('#valor-financeiro');



//Abrir o formulário ao clicar no botão
botaoAbrir.addEventListener('click', function() {

    formularioContainer.hidden = false; // Exibe o formulário
    mensagem.style.display = 'none'; // Oculta a mensagem de sucesso

});


//Fechar o formulário ao clicar no botão cancelar
cancelar.addEventListener('click', function() {

    formularioContainer.hidden = true; // Oculta o formulário
    formulario.reset(); // Limpa os campos do formulário
    mensagem.style.display = 'none'; // Oculta a mensagem de sucesso


});


// envio o formulário
formulario.addEventListener('submit', function(event) {

    event.preventDefault(); // Impede o envio do formulário

    const nomeValue = nome.value.trim(); // Obtém o valor do campo de texto e remove espaços em branco
    const emailValue = email.value.trim();
    const valorFinanceiroValue = valorFinanceiro.value.trim(); // Obtém o valor do campo de seleção

    if (nomeValue === '' || emailValue === '' || valorFinanceiroValue === '') {
        alert('Por favor, preencha todos os campos antes de enviar o formulário.');
        return; // Sai da função se algum campo estiver vazio
    }

    formulario.reset();
    formularioContainer.hidden = true; // Oculta o formulário
    modalSucesso.hidden = false; // Exibe o modal de sucesso

});



fecharSucesso.addEventListener('click', function() {

    modalSucesso.hidden = true;

});



// Validando Formulário de Doação alimentos.
const form = document.querySelector('.form-doacao');
const nomeAli = document.querySelector('#nome');
const emailAli = document.querySelector('#email');
const telefoneAli = document.querySelector('#telefone');
const tipoDoacao = document.querySelector('#tipo-doacao');
const mensagemAli = document.querySelector('#mensagem-doacao');

// Verifica se todos os campos estão preenchidos antes de enviar o formulário
form.addEventListener('submit', function(event) {

    event.preventDefault(); // Impede o envio do formulário
    
    const textoALi = nomeAli.value.trim(); // Obtém o valor do campo de texto e remove espaços em branco
    const emailAliValue = emailAli.value.trim(); 
    const telefoneAliValue = telefoneAli.value.trim(); 
    const tipoDoacaoValue = tipoDoacao.value; // Obtém o valor do campo de seleção

    if (textoALi === '' || emailAliValue === '' || telefoneAliValue === '' || tipoDoacaoValue === '') {
        alert('Por favor, preencha todos os campos antes de enviar o formulário.');
        return; // Sai da função se algum campo estiver vazio.
    }


    mensagemAli.textContent = 'Doação registrada com sucesso! Sua doação é muito importante para a comunidade.'; // Exibe a mensagem de sucesso
    mensagemAli.style.display = 'block'; // Exibe a mensagem

    form.reset(); // Limpa os campos do formulário
    

});


