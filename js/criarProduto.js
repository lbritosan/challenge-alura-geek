import { conectaApi } from "./conectaApi.js";

const buttonGuardar = document.querySelector('[data-button-guardar]');

async function adicionarProduto(event) {
    event.preventDefault();
    const nome = document.querySelector('[data-input-nome]').value;
    const preco = document.querySelector('[data-input-valor]').value;
    const imagem = document.querySelector('[data-input-imagem]').value;

    try {
        await conectaApi.adicionarProduto(nome, preco, imagem);
    } catch (error) {
        console.error(error);
    }
}
buttonGuardar.addEventListener('click', adicionarProduto);