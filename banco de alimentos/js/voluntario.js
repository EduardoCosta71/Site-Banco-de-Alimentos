// Validando Formulário de voluntariado.
const form = document.querySelector('.form-voluntario');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const areaInteresse = document.querySelector('#area_interesse');
const disponibilidade = document.querySelector('#disponibilidade');
const mensagem = document.querySelector('#mensagem-voluntario');

// Verifica se todos os campos estão preenchidos antes de enviar o formulário
form.addEventListener('submit', function(event) {

    event.preventDefault(); // Impede o envio do formulário
    
    const texto = nome.value.trim(); // Obtém o valor do campo de texto e remove espaços em branco
    const emailValue = email.value.trim(); 
    const areaInteresseValue = areaInteresse.value; // Obtém o valor do campo de seleção
    const disponibilidadeValue = disponibilidade.value; // Obtém o valor do campo de seleção

    if (texto === '' || emailValue === '' || areaInteresseValue === '' || disponibilidadeValue === '') {
        alert('Por favor, preencha todos os campos antes de enviar o formulário.');
        return; // Sai da função se algum campo estiver vazio.
    }

    mensagem.textContent = 'Inscrição enviada com sucesso! Entraremos em contato breve.'; // Exibe a mensagem de sucesso
    mensagem.style.display = 'block'; // Exibe a mensagem

    form.reset(); // Limpa os campos do formulário
    

});
