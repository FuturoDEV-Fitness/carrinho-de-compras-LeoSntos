<h1>Carrinho de Compras</h1> </br>

O Carrinho de Compras é uma API que permite gerenciar pedidos de compra, produtos e clientes. A API permite criar, listar e filtrar pedidos, além de gerenciar informações de produtos e clientes. </br>

<h2>Problema Resolvido</h2> 
Gerenciar pedidos de compra pode ser complexo e demorado, especialmente quando se trata de armazenar e recuperar informações sobre clientes, produtos e detalhes dos pedidos. Esta API resolve o problema fornecendo uma interface simples para realizar essas operações de forma eficiente.</br>

<h2>Tecnologias Utilizadas</h2> 
Backend: Node.js, Express </br>
Banco de Dados: PostgreSQL </br>
Outras Ferramentas: Git, GitHub, VSCode, Postman </br>

<h2>Executando o Sistema</h2> </br>
Clone o repositório do GitHub: </br>
<code>git clone https://github.com/LeoSntos/carrinho-de-compras.git</code> </br>

Navegue até o diretório do projeto: </br>
<code>cd carrinho-de-compras</code> </br>

Instale as dependências do projeto: </br>
<code>npm install</code> </br>

Configure o banco de dados PostgreSQL e as variáveis de ambiente no arquivo .env: </br>

<code>
DB_HOST=localhost </br>
DB_USER=seu_usuario </br>
DB_PASSWORD=sua_senha </br>
DB_NAME=seu_banco_de_dados </br>
</code>

Inicie o servidor: </br>
<code>npm start</code> </br>

<h2>Endpoints</h2>

<h3>Clientes</h3> </br>
<code>POST /clients</code>: Cria um novo cliente. </br>
<code>GET /clients</code>: Lista todos os clientes. </br>
<code>GET /clients/:id</code>: Obtém informações de um cliente específico. </br>

<h3>Produtos</h3> </br>
<code>POST /products</code>: Cria um novo produto. </br>
<code>GET /products</code>: Lista todos os produtos ou filtra produtos por nome ou descrição. </br>
<code>GET /products/:id</code>: Obtém informações de um produto específico. </br>

<h3>Pedidos</h3> </br>
<code>POST /orders</code>: Cria um novo pedido. </br>
<code>GET /orders/:id</code>: Obtém informações detalhadas de um pedido específico. </br>

<h2>Melhorias Futuras</h2> 
Implementar autenticação e autorização. </br>
Adicionar funcionalidades avançadas de busca e filtragem de pedidos. </br>
Melhorar a interface de resposta da API com mais informações. </br>
Implementar testes automatizados para garantir a qualidade do código. </br>
Permitir que os usuários adicionem avaliações e comentários sobre os produtos. </br>

<h2>Contribuição</h2> </br>
Este projeto foi desenvolvido como parte de um portfólio pessoal e está aberto para contribuições e sugestões de melhorias. Sinta-se à vontade para explorar o código-fonte e enviar feedback. </br>
