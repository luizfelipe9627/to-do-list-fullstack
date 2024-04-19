const tasksModel = require("../models/tasksModel"); // Importa o modelo de tarefas.

// Criado uma função assincrona chamada getTask que recebe dois parâmetros, a requisição feita pelo cliente e o res é a resposta que será enviada para o cliente. Essa função será responsável por buscar todas as tarefas presentes no banco de dados. O async é utilizado para que a função possa utilizar o await.
const getTask = async (_req, res) => {
  const tasks = await tasksModel.getTask(); // Executa a função getTask do modelo de tarefas, que é responsável por buscar todas as tarefas presentes no banco de dados e armazena o retorno na variável tasks. O await é utilizado para que a função espere a execução da função getTask e só depois continue a execução.

  return res.status(200).json(tasks); // Retorna um status 200(ocorreu tudo bem) e o array de tarefas em formato JSON.
};

// Criado uma função assíncrona chamada createTask que recebe dois parâmetros, a requisição feita pelo cliente e a resposta que será enviada para o cliente. Essa função será responsável por criar uma nova tarefa no banco de dados. O async é utilizado para que a função possa utilizar o await.
const createTask = async (req, res) => {
  const createdTask = await tasksModel.createTask(req.body); // Executa a função createTask do modelo de tarefas, que é responsável por criar uma nova tarefa no banco de dados passando como parâmetro o corpo da requisição(o que foi enviado pelo cliente) e armazena o retorno na variável createdTask. O await é utilizado para que a função espere a execução da função createTask e só depois continue a execução.

  return res
    .status(201)
    .json({ message: "Tarefa criada com sucesso.", createdTask }); // Retorna um status 201(created) e uma mensagem em formato JSON informando que a tarefa foi criada com sucesso.
};

// Criado uma função assíncrona chamada updateTask que recebe dois parâmetros, a requisição feita pelo cliente e a resposta que será enviada para o cliente. Essa função será responsável por atualizar uma tarefa no banco de dados. O async é utilizado para que a função possa utilizar o await.
const updateTask = async (req, res) => {
  const { id } = req.params; // Desestrutura o objeto req.params, pegando apenas o id.

  await tasksModel.updateTask(id, req.body); // Executa a função updateTask do modelo de tarefas, que é responsável por atualizar uma tarefa no banco de dados passando como parâmetro o id passado na URL da requisição e o corpo da requisição(o que foi enviado pelo cliente). O await é utilizado para que a função espere a execução da função updateTask e só depois continue a execução.

  return res.status(200).json({ message: "Tarefa atualizada com sucesso." }); // Retorna um status 200(ocorreu tudo bem) e uma mensagem em formato JSON informando que a tarefa foi atualizada com sucesso.
};

// Criado uma função assíncrona chamada deleteTask que recebe dois parâmetros, a requisição feita pelo cliente e a resposta que será enviada para o cliente. Essa função será responsável por deletar uma tarefa no banco de dados. O async é utilizado para que a função possa utilizar o await.
const deleteTask = async (req, res) => {
  const { id } = req.params; // Desestrutura o objeto req.params, pegando apenas o id.

  await tasksModel.deleteTask(id); // Executa a função deleteTask do modelo de tarefas, que é responsável por deletar uma tarefa no banco de dados passando como parâmetro o id passado na URL da requisição. O await é utilizado para que a função espere a execução da função deleteTask e só depois continue a execução.

  return res.status(200).json({ message: "Tarefa deletada com sucesso." }); // Retorna um status 200(ocorreu tudo bem) e uma mensagem em formato JSON informando que a tarefa foi deletada com sucesso.
};

// Exporta todas as funções passadas no objeto para serem utilizadas em outros arquivos.
module.exports = {
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
