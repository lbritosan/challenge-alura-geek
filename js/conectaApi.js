// Configuração do endpoint da API
const API_URL = 'http://localhost:3000/produtos';

// Função para listar todos os produtos
async function listarProdutos() {
    try {
        const response = await fetch(API_URL);
        const produtos = await response.json();
        return produtos;
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
    }
}

// Função para adicionar um novo produto
async function adicionarProduto(nome, preco, imagem) {
    try {
        const novoProduto = {
            nome,
            preco,
            imagem
        };
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoProduto)
        });
        const produtoAdicionado = await response.json();
        alert('Produto adicionado com sucesso!');
        console.log('Produto adicionado:', produtoAdicionado);
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
    }
}

// Função para atualizar um produto
async function atualizarProduto(id, nome, preco, imagem) {
    try {
        const produtoAtualizado = {
            nome,
            preco,
            imagem
        };
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produtoAtualizado)
        });
        const resultado = await response.json();
        console.log('Produto atualizado:', resultado);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
    }
}

// Função para deletar um produto
async function deletarProduto(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log(`Produto com ID ${id} deletado com sucesso.`);
        } else {
            console.error(`Erro ao deletar produto com ID ${id}:`, response.status);
        }
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
    }
}


export const conectaApi = {
    listarProdutos,
    adicionarProduto,
    deletarProduto
};
