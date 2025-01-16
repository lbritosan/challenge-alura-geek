// import { conectaApi } from "./conectaApi.js";

// const buttonsDeletar = document.querySelector('[data-button-deletar]');

// async function deletarProduto(event) {
//     event.preventDefault();

//     const button = event.currentTarget;
//     const id = button.dataset.id;

//     try {
//         await conectaApi.deletarProduto(id);
//         // Optionally, remove the product from the DOM or refresh the list
//     } catch (error) {
//         console.error(error);
//     }
// }

// button.addEventListener('click', deletarProduto);


import { conectaApi } from "./conectaApi.js";

// Função para deletar produto
async function deletarProduto(event) {
    event.preventDefault();

    const button = event.currentTarget; // Botão clicado
    const id = button.dataset.id; // Obtém o ID do produto

    try {
        await conectaApi.deletarProduto(id);
        console.log(`Produto com ID ${id} deletado com sucesso.`);
        
        // Remove o card correspondente do DOM
        const card = button.closest(".product-card");
        if (card) card.remove();
    } catch (error) {
        console.error("Erro ao deletar o produto:", error);
    }
}

// Adicionar eventos aos botões de deletar
function adicionarEventosDeletar() {
    const buttonsDeletar = document.querySelectorAll("[data-button-deletar]");

    buttonsDeletar.forEach((button) => {
        button.addEventListener("click", deletarProduto);
    });
}

// Exporta a função para reutilizar após novas renderizações
export { adicionarEventosDeletar };

// Chama a função para adicionar eventos aos botões já existentes
adicionarEventosDeletar();
