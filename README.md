SA-Duplas - API de Equipes e Desenvolvedores

API REST para gerenciamento de squads e desenvolvedores.

Tecnologias:

Node.js e Express

PostgreSQL

Prisma ORM (v7.9.1)

Como Rodar:

Instalar dependências:
npm install

Configurar o banco de dados:
Crie um arquivo .env na raiz com a variável:
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

Gerar o client e rodar as migrations:
npx prisma generate
npx prisma migrate dev --name init

Iniciar o servidor (porta 3000):
npm run dev

Endpoints:

POST /equipes : Cadastrar equipe

GET /equipes : Listar equipes

POST /desenvolvedores : Cadastrar dev em uma equipe

GET /equipes/:id/desenvolvedores : Listar devs de uma equipe

PUT /desenvolvedores : Atualizar dados do dev

PUT /equipe : Atualizar dados da equipe

DELETE /desenvolvedores/:id : Deletar dev

DELETE /equipe/:id : Deletar equipe