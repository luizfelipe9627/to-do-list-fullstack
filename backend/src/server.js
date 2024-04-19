const app = require("./app"); // Importa o app que foi criado no arquivo app.js.
const dotenv = require("dotenv"); // Importa o dotenv para utilizar variáveis de ambiente.
const swaggerUi = require("swagger-ui-express"); // Está importando o módulo swagger-ui-express pelo Node.js para a variável swaggerUi.
const swaggerDocument = require("../swagger.json"); // Está importando o arquivo swagger.json para a variável swaggerDocument.

dotenv.config(); // Configura o dotenv para utilizar variáveis de ambiente em todo o projeto.

const PORT = process.env.PORT || 3000; // Define a porta que o servidor irá rodar, ele irá utilizar a variável de ambiente PORT, caso não exista, irá utilizar a porta 3000, armazenando na variável PORT.

// O método listen faz com que o servidor web fique escutando requisições HTTP na porta definida, no caso a porta armazenada na variável PORT e quando o servidor estiver rodando, executará a função de callback.
app.listen(
  PORT,
  () => console.log(`Servidor rodando em http://localhost:${PORT}`), // Exibe no console a mensagem com o endereço que o servidor está rodando.
);

var options = {
  customCss: ".swagger-ui .topbar { display: none }", // Está ocultando a barra superior do swagger.
};

// Está adicionando o plugin swagger-ui-express no express, ele recebe dois parâmetros, o primeiro é a rota e o segundo é o plugin.
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options),
);