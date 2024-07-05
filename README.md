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

DB_HOST=localhost </br>
DB_USER=seu_usuario </br>
DB_PASSWORD=sua_senha </br>
DB_NAME=seu_banco_de_dados </br>

Inicie o servidor: </br>
npm start </br>

Clientes </br>
POST /clients: Cria um novo cliente. </br>
GET /clients: Lista todos os clientes. </br>
GET /clients/id: Obtém informações de um cliente específico. </br>

Produtos </br>
POST /products: Cria um novo produto. </br>
GET /products: Lista todos os produtos ou filtra produtos por nome ou descrição. </br>
GET /products/id: Obtém informações de um produto específico. </br>

Pedidos </br>
POST /orders: Cria um novo pedido. </br>
GET /orders/: Obtém informações detalhadas de um pedido específico. </br>

Melhorias Futuras </br>
Implementar autenticação e autorização. </br>
Adicionar funcionalidades avançadas de busca e filtragem de pedidos. </br>
Melhorar a interface de resposta da API com mais informações. </br>
Implementar testes automatizados para garantir a qualidade do código. </br>
Permitir que os usuários adicionem avaliações e comentários sobre os produtos. </br>

Contribuição</br>
Este projeto foi desenvolvido como parte de um portfólio pessoal e está aberto para contribuições e sugestões de melhorias. Sinta-se à vontade para explorar o código-fonte e enviar feedback.
