import { conectaApi } from "./conectaApi.js";
import { adicionarEventosDeletar } from "./deletarProduto.js";

const dataListaProduto = document.querySelector("[data-lista-produtos]");

export default function constroiProdutos(nome, preco, imagem, id) {
    const produto = document.createElement("div");
    produto.className = "product-card";
    produto.innerHTML = `
        <img src="${imagem}" alt="${nome}" class="product-image">
        <h2 class="product-name">${nome}</h2>
        <p class="product-price">R$ ${preco},00</p>
        <button class="delete-button" data-id="${id}" data-button-deletar>🗑️</button>
    `;

    return produto;
}

async function mostrarProdutos() {
    try {
        const listaProdutos = await conectaApi.listarProdutos();
        listaProdutos.forEach((elemento) =>
            dataListaProduto.appendChild(
                constroiProdutos(
                    elemento.nome,
                    elemento.preco,
                    elemento.imagem,
                    elemento.id
                )
            )
        );
        // Adicionar eventos de deletar aos botões renderizados
        adicionarEventosDeletar();
    } catch (error) {
        console.error(error);
    }
}

mostrarProdutos();