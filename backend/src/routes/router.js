const express = require("express"); // Importando o express, responsável por criar o servidor web.
const tasksController = require("../controllers/tasksController"); // Importa o controller de tarefas, responsável por ter as funções que serão chamadas nas rotas.
const tasksMiddleware = require("../middlewares/tasksMiddlewares"); // Importa o middleware de tarefas, responsável por ter as funções que serão chamadas antes das funções do controller.

const router = express.Router(); // Cria um objeto de rotas do express.

/* 
  - GET: Buscar/obter uma ou mais informações do back-end.
  - POST: Criar uma nova informação no back-end.
  - PUT: Atualizar uma informação existente no back-end.
  - DELETE: Remover uma informação do back-end.
*/

// Está criando uma rota chamada /tasks do tipo GET(obtem informações). O primeiro parâmetro é a rota e o segundo é a função que será chamada quando a rota for acessada, no caso a função getTask do controller de tarefas.
router.get("/tasks", tasksController.getTask);

// Está criando uma rota chamada /tasks do tipo POST(cria informações). O primeiro parâmetro é a rota e o segundo é a função middleware que será chamada antes da função do controller, no caso a função validatePostBody do middleware de tarefas. O terceiro parâmetro é a função que será chamada quando a rota for acessada, no caso a função createTask do controller de tarefas.
router.post(
  "/tasks",
  tasksMiddleware.validatePostBody,
  tasksController.createTask,
);

// Está criando uma rota chamada /tasks/:id do tipo PUT(atualiza informações). O primeiro parâmetro é a rota e o segundo é a função middleware que será chamada antes da função do controller, no caso a função validatePutBody do middleware de tarefas. O terceiro parâmetro é a função que será chamada quando a rota for acessada, no caso a função updateTask do controller de tarefas.
router.put(
  "/tasks/:id",
  tasksMiddleware.validatePutBody,
  tasksController.updateTask,
);

// Está criando uma rota chamada /tasks/:id do tipo DELETE(deleta informações). O primeiro parâmetro é a rota e o segundo é a função que será chamada quando a rota for acessada, no caso a função deleteTask do controller de tarefas.
router.delete("/tasks/:id", tasksController.deleteTask);

module.exports = router; // Exporta o router para ser utilizado em outros arquivos.
