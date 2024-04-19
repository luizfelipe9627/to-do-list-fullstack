const express = require("express"); // Importa o express, responsável por criar o servidor web.
const cors = require("cors"); // Importa o cors, responsável por permitir que o frontend acesse o backend.
const router = require("./routes/router"); // Importa o router que foi criado no arquivo router.js.

const app = express(); // Cria o servidor web e armazena na variável app.

app.use(cors()); // Utiliza o cors no app, liberando o acesso de todo o backend para qualquer frontend.

app.use(express.json()); // Faz com que o express entenda requisições no formato JSON.

app.use(router); // Utiliza o router no app, fazendo com que todas as rotas criadas no router sejam utilizadas no app.

module.exports = app; // Exporta o app para ser utilizado em outros arquivos.
