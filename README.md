# Test for Ticto

## Descrição

- Este é um projeto de API desenvolvido com Node.js e MongoDB (Atlas), seguindo a arquitetura MVC (Model-View-Controller). A API permite um crud de cadastro de despesas e o retorno total.

- O root da aplicação se encontra no index.ts essa rota com versionamento encaminha para uma rota de instâncias com o serviço de chat e autenticação (apiRoutesV1.ts) e essa encaminha para as suas rotas respectivas. Podendo adicionar mais instâncias no projeto, ficando assim uma API com arquitetura escalável, durável e de compreensível manutenção com o seu padrão MVC.

- Não é necessário rodar um banco de dados local pois estará disponível no MongoDB Atlas.

## Tecnologias Usadas

- **Node.js**: Para a construção da API.
- **Typescript**: Para um código mais acertivo.
- **MongoDB**: Para armazenamento de dados.
- **Docker**: Para containerização e facilidade de deployment.

## Arquitetura

- **Model**: Define a estrutura dos dados (neste caso, um cliente).
- **View**: Não se aplica diretamente, pois esta é uma API, mas em um contexto de frontend, representaria a parte visual que está em next para este projeto.
- **Controller**: Lida com a lógica de negócios, processa as requisições e interage com o Model.

## Pré-requisitos

- Node.js (versão 20 ou superior)
- MongoDB Compass (opcional, conectar com MONGODB_URI disponível no .env -> Solicitar)
- Docker (reqcomendado para rodar local)

1. Clone o repositório:

https:

- git clone https://github.com/victorbonanho/ticto-test-backend.git

ssh:

- git@github.com:victorbonanho/ticto-test-backend.git
- cd ticto-test-backend

2. Instale as dependências:

- npm install

3. O arquivo .env ficará INDISPONÍVEL no repositório público pois a api do chatGPT bloqueia o uso em repositórios, para testar localmente anexe o .env enviado por e-mail ou solicite.

## Usando Docker

1. Execute os seguintes comandos para construir e rodar o projeto localmente:

- docker-compose down
- docker-compose up --build

2. A API estará acessível em http://localhost:3000.

## Usando Node.js diretamente

1. npm start ou npm run dev

## DEPLOY - Aplicação se em produção estará diponível em

https://ticto-test-backend.onrender.com

**Aplicação hospedada no render.com e utilizado docker para melhor compatibilidade**

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE.md para detalhes.

## Feedback e Contato

- Para dúvidas ou feedback, entre em contato pelo e-mail: [victbonanho@gmail.com].
