import { conectaApi } from "./conectaApi.js";

const buttonGuardar = document.querySelector("[data-button-guardar]");

async function adicionarProduto(event) {
    event.preventDefault();

    // Capturando os valores dos inputs
    const nomeInput = document.querySelector("[data-input-nome]");
    const precoInput = document.querySelector("[data-input-valor]");
    const imagemInput = document.querySelector("[data-input-imagem]");

    alert('>>> nomeInput', nomeInput);

    const nome = nomeInput.value.trim();
    const preco = precoInput.value.trim();
    const imagem = imagemInput.value.trim();

    // Validações
    if (!nome) {
        alert("O campo Nome é obrigatório.");
        nomeInput.focus();
        return;
    }

    if (!preco || isNaN(preco) || Number(preco) <= 0) {
        alert("O campo Preço deve conter um valor numérico maior que zero.");
        precoInput.focus();
        return;
    }

    const formatosValidos = /\.(jpg|jpeg|png|gif)$/i;
    if (!imagem || !formatosValidos.test(imagem)) {
        alert("O campo Imagem deve conter uma URL válida terminada em .jpg, .jpeg, .png ou .gif.");
        imagemInput.focus();
        return;
    }

    // Inserção do produto
    try {
        //await conectaApi.adicionarProduto(nome, Number(preco), imagem);
        alert("Produto adicionado com sucesso!");

        // Limpar os campos após adicionar
        nomeInput.value = "";
        precoInput.value = "";
        imagemInput.value = "";
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
        alert("Ocorreu um erro ao tentar adicionar o produto. Tente novamente mais tarde.");
    }
}

buttonGuardar.addEventListener("click", adicionarProduto);
