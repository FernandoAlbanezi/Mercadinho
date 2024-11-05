# Regras de Negócio do Sistema de Mercado

## Cadastro de Clientes
- O cadastro de um cliente exige o preenchimento de nome e e-mail.
- Não pode haver dois clientes com o mesmo e-mail.

## Cadastro de Funcionários
- O cadastro de um funcionário exige o preenchimento de nome e cargo.
- Somente administradores podem cadastrar funcionários.

## Cadastro de Produtos
- O cadastro de um produto exige nome, preço e quantidade.
- Cada produto deve ter uma quantidade mínima de estoque (por exemplo, 1 unidade).
- Produtos cadastrados serão exibidos na área de vendas.

## Área de Vendas
- Clientes podem escolher produtos e indicar a quantidade que desejam comprar.
- O sistema verificará se há estoque suficiente para a venda.
- Após a venda, o estoque do produto será atualizado automaticamente.
- A quantidade de produtos em estoque não pode ser negativa.

## Regras Gerais
- Sempre que um novo cliente ou funcionário for cadastrado, uma mensagem de sucesso será exibida.
- Os funcionários podem visualizar e atualizar os produtos em estoque.