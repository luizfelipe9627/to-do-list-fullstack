const connection = require("./connection"); // Importa a conexão com o banco de dados, que foi criada no arquivo connection.js.

// Criado uma função assincrona chamada getTask responsável por buscar todas as tarefas presentes no banco de dados. O async é utilizado para que a função possa utilizar o await.
const getTask = async () => {
  const query = "SELECT * FROM tasks ORDER BY status DESC"; // Modifica a query para buscar todas as tarefas ordenadas pelo status em ordem decrescente (pendente primeiro, concluído por último).

  const tasks = await connection.execute(query); // Chama o método execute da conexão com o banco de dados, passando a query que busca todas as tarefas. O await tem que ser utilizado para que a função espere a execução da query e só depois retorne o resultado.

  return tasks[0]; // Retorna o resultado da query, que é um array de objetos que vai conter duas arrays, uma com os dados das tarefas e outra com informações sobre a query, por isso estamos retornando somente a primeira posição do array, que é a array de tarefas.
};

// Criado uma função assincrona chamada createTask que recebe um parâmetro chamado task. Essa função será responsável por criar uma nova tarefa no banco de dados.
const createTask = async (task) => {
  const { title } = task; // Desestrutura o objeto task, pegando apenas o title.

  const query = "INSERT INTO tasks(title, status) VALUES(?, ?)"; // Cria uma query de inserção de uma nova tarefa no banco de dados. O INSERT INTO é utilizado para inserir dados em uma tabela no caso o tasks, que recebe as chaves title e status. Os valores são passados como ?, pois serão substituídos pelos valores reais na execução da query.

  // Chama o método execute da conexão com o banco de dados, passando a query que insere uma nova tarefa, substituindo os ? pelo título da tarefa, o status por padrão é pendente. O await tem que ser utilizado para que a função espere a execução da query e só depois retorne o resultado.
  await connection.execute(
    query, // Executa a query de inserção de uma nova tarefa no banco de dados.
    [title, "pendente"], // Passa os valores que substituirão os ? na query. O title é o título da tarefa, o status por padrão é pendente.
  );
};

// Criado uma função assincrona chamada deleteTask que recebe um parâmetro chamado id. Essa função será responsável por deletar uma tarefa no banco de dados. O async é utilizado para que a função possa utilizar o await.
const deleteTask = async (id) => {
  const query = "DELETE FROM tasks WHERE id = ?"; // Cria uma query de deletar uma tarefa no banco de dados. O DELETE FROM é utilizado para deletar dados de uma tabela no caso o tasks, que recebe a chave id. O valor é passado como ?, pois será substituído pelo valor real na execução da query.

  await connection.execute(query, [id]); // Chama o método execute da conexão com o banco de dados, passando a query que deleta uma tarefa, substituindo o ? pelo id da tarefa. O await tem que ser utilizado para que a função espere a execução da query e só depois retorne o resultado.
};

// Criado uma função assincrona chamada updateTask que recebe dois parâmetros, id e task. Essa função será responsável por atualizar uma tarefa no banco de dados. O async é utilizado para que a função possa utilizar o await.
const updateTask = async (id, task) => {
  const { title, status } = task; // Desestrutura o objeto task, pegando apenas o title e status.

  const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?"; // Cria uma query de atualizar uma tarefa no banco de dados. O UPDATE é utilizado para atualizar dados de uma tabela no caso o tasks, que recebe as chaves title e status e a condição WHERE id = ? que é o id da tarefa que será atualizada. Os valores são passados como ?, pois serão substituídos pelos valores reais na execução da query.

  await connection.execute(query, [title, status, id]); // Chama o método execute da conexão com o banco de dados, passando a query que atualiza uma tarefa, substituindo os ? pelo título e status da tarefa e o id da tarefa. O await tem que ser utilizado para que a função espere a execução da query e só depois retorne o resultado.
};

// Exporta todas as funções passadas no objeto para serem utilizadas em outros arquivos.
module.exports = {
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
