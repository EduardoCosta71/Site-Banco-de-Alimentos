const botoes = document.querySelectorAll('.faq-botao');

botoes.forEach(function(botao) {


    botao.addEventListener('click', function() {

    const resposta = botao.nextElementSibling; // Obtém o próximo elemento irmão (resposta)
    const simbolo = botao.querySelector('span'); // Obtém o elemento do símbolo dentro do botão

    resposta.classList.toggle('aberta'); // Alterna a classe "resposta-ativa" para exibir ou ocultar a resposta

    if (resposta.classList.contains('aberta')) {

        simbolo.textContent = '-'; // Altera o símbolo para "+"

    }

    else {

        simbolo.textContent = '+'; // Altera o símbolo para "-"
    }

    });

});