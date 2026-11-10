console.log("JavaScript carregado!");

const botoesFiltro = document.querySelectorAll('.filtro-btn');
const projetos = document.querySelectorAll('.model-proj .modelo-cont');

console.log("Botões encontrados:", botoesFiltro.length);
console.log("Projetos encontrados:", projetos.length);

// Adiciona um evento de clique a cada botão de filtro
botoesFiltro.forEach(botao => {

    botao.addEventListener('click', () => {
        
        const categoriaSelecionada = botao.dataset.filtro;

        projetos.forEach(projeto => {

            const categoriaProjeto = projeto.dataset.categoria;

            // Verifica se o projeto pertence à categoria selecionada ou se a categoria selecionada é "todos"
            if (categoriaSelecionada === 'todos' || categoriaSelecionada === categoriaProjeto) {

                projeto.style.display = 'block'; // Exibe o projeto


            } else{

                projeto.style.display = 'none'; // Oculta o projeto
            }

        });

        botoesFiltro.forEach(btn => {

            btn.classList.remove('ativo'); // Remove a classe 'ativo' de todos os botões

        });

        botao.classList.add('ativo'); // Adiciona a classe 'ativo' ao botão clicado
    });

});
