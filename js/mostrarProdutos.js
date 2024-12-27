import { conectaApi } from './conectaApi.js';

const dataListaProduto = document.querySelector('[data-lista-produtos]');

export default function constroiProdutos(nome, preco, imagem) {
    const produto = document.createElement('div');
    produto.innerHTML = `<img src="${imagem}" alt="${nome}">
                        <h1>${nome}</h1>
                        <p>${preco}</p>`;
    return produto;
}

async function mostrarProdutos() {
    try {
        const listaProdutos = await conectaApi.listaProdutos();
        listaProdutos.forEach(elemento => mostrarProdutos(elemento.nome, elemento.preco, elemento.imagem));
    } catch (error) {
        console.error(error);        
    }
}

//mostrarProdutos();