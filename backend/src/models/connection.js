const mysql = require("mysql2/promise"); // Importa o mysql2 para fazer a conexão com o banco de dados.
const dotenv = require("dotenv"); // Importa o dotenv para utilizar variáveis de ambiente.

dotenv.config(); // Configura o dotenv para utilizar variáveis de ambiente em todo o projeto.

// O método createPool cria uma lista de conexões com o banco de dados, recebe um objeto com as configurações de conexão e armazena na variável connection.
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST, // Define o host do banco de dados como a variável de ambiente MYSQL_HOST.
  user: process.env.MYSQL_USER, // Define o usuário do banco de dados como a variável de ambiente MYSQL_USER.
  password: process.env.MYSQL_PASSWORD, // Define a senha do banco de dados como a variável de ambiente MYSQL_PASSWORD.
  database: process.env.MYSQL_DATABASE, // Define o nome do banco de dados como a variável de ambiente MYSQL_DATABASE.
});

module.exports = connection; // Exporta a conexão para ser utilizada em outros arquivos.
