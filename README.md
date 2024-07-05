Carrinho de Compras

O Carrinho de Compras é uma API que permite gerenciar pedidos de compra, produtos e clientes. A API permite criar, listar e filtrar pedidos, além de gerenciar informações de produtos e clientes.

Problema Resolvido
Gerenciar pedidos de compra pode ser complexo e demorado, especialmente quando se trata de armazenar e recuperar informações sobre clientes, produtos e detalhes dos pedidos. Esta API resolve o problema fornecendo uma interface simples para realizar essas operações de forma eficiente.

Tecnologias Utilizadas
Backend: Node.js, Express
Banco de Dados: PostgreSQL
Outras Ferramentas: Git, GitHub, VSCode, Postman


Executando o Sistema
Clone o repositório do GitHub:
git clone https://github.com/LeoSntos/carrinho-de-compras.git

Navegue até o diretório do projeto:
cd carrinho-de-compras

Instale as dependências do projeto:
npm install

Configure o banco de dados PostgreSQL e as variáveis de ambiente no arquivo .env:

DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco_de_dados

Inicie o servidor:
npm start

Clientes
POST /clients: Cria um novo cliente.
GET /clients: Lista todos os clientes.
GET /clients/id: Obtém informações de um cliente específico.

Produtos
POST /products: Cria um novo produto.
GET /products: Lista todos os produtos ou filtra produtos por nome ou descrição.
GET /products/id: Obtém informações de um produto específico.

Pedidos
POST /orders: Cria um novo pedido.
GET /orders/: Obtém informações detalhadas de um pedido específico.

Melhorias Futuras
Implementar autenticação e autorização.
Adicionar funcionalidades avançadas de busca e filtragem de pedidos.
Melhorar a interface de resposta da API com mais informações.
Implementar testes automatizados para garantir a qualidade do código.
Permitir que os usuários adicionem avaliações e comentários sobre os produtos.

Contribuição
Este projeto foi desenvolvido como parte de um portfólio pessoal e está aberto para contribuições e sugestões de melhorias. Sinta-se à vontade para explorar o código-fonte e enviar feedback.
