// Função para salvar produtos no localStorage
function salvarProdutos(produtos) {
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Função para obter produtos do localStorage
function obterProdutos() {
    const produtos = localStorage.getItem('produtos');
    return produtos ? JSON.parse(produtos) : [];
}

// Atualiza a área de Vendas com os produtos cadastrados
function atualizarVendas() {
    const selectProduto = document.getElementById('produtoEscolhido');
    const produtos = obterProdutos();

    selectProduto.innerHTML = '<option value="">Selecione um Produto</option>'; // Limpa o select

    if (produtos.length === 0) {
        selectProduto.innerHTML += '<option disabled>Sem produtos disponíveis</option>';
        return;
    }

    // Exibe os produtos na área de vendas
    produtos.forEach(produto => {
        const option = document.createElement('option');
        option.value = produto.nome;
        option.innerText = `${produto.nome} - R$ ${produto.preco} - Estoque: ${produto.quantidade}`;
        selectProduto.appendChild(option);
    });
}

// Cadastro de Produto
document.getElementById('formCadastroProdutoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores do formulário de cadastro de produto
    const nome = document.getElementById('nomeProduto').value;
    const preco = document.getElementById('precoProduto').value;
    const quantidade = document.getElementById('quantidadeProduto').value;

    // Verificação se todos os campos estão preenchidos
    if (!nome || !preco || !quantidade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Criação do objeto produto
    const produto = { nome, preco, quantidade: parseInt(quantidade) };

    // Obtém os produtos cadastrados e adiciona o novo produto
    const produtos = obterProdutos();
    produtos.push(produto);

    // Salva os produtos no localStorage
    salvarProdutos(produtos);

    // Limpa o formulário de cadastro de produto
    document.getElementById('formCadastroProdutoForm').reset();

    // Atualiza a exibição da área de vendas
    atualizarVendas();
});

// Área de Vendas
document.getElementById('formVenda').addEventListener('submit', function(event) {
    event.preventDefault();

    const produtoEscolhido = document.getElementById('produtoEscolhido').value;
    const quantidadeVenda = parseInt(document.getElementById('quantidadeVenda').value);
    const resultado = document.getElementById('vendasRegistradas');

    if (!produtoEscolhido || !quantidadeVenda) {
        alert('Por favor, escolha um produto e uma quantidade.');
        return;
    }

    const produtos = obterProdutos();
    const produto = produtos.find(p => p.nome === produtoEscolhido);

    if (!produto) {
        alert('Produto não encontrado.');
        return;
    }

    if (produto.quantidade < quantidadeVenda) {
        alert('Quantidade insuficiente em estoque.');
        return;
    }

    // Subtrai a quantidade vendida do estoque
    produto.quantidade -= quantidadeVenda;

    // Salva o estoque atualizado no localStorage
    salvarProdutos(produtos);

    // Registra a venda
    resultado.innerHTML += `<p>Venda Registrada: ${quantidadeVenda} de ${produtoEscolhido}</p>`;

    // Atualiza a exibição da área de vendas
    atualizarVendas();

    // Limpa o formulário de vendas
    document.getElementById('formVenda').reset();
});

// Atualiza a área de Vendas ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    atualizarVendas();
});
