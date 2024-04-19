import { DELETE_TASK } from "../Api";
import createAsyncSlice from "./helper/createAsyncSlice";

// Criado uma constante chamada slice que recebe o retorno da função createAsyncSlice, que recebe um objeto contendo as configurações padrões do slice.
const slice = createAsyncSlice({
  name: "deleteTask", // Define o nome do slice como deleteTask.

  fetchConfig: (id) => DELETE_TASK(id), // A função fetchConfig está retornando a requisição da função DELETE_TASK, passando o id da tarefa como parâmetro, fazendo a requisição DELETE para a API, deletando a tarefa com o id informado no banco de dados.
});

export const fetchDeleteTask = slice.asyncAction; // Exporta a função fetchDeleteTask que recebe o retorno da função asyncAction do slice.

export default slice.reducer; // Exporta o reducer do slice.
