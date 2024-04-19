import { GET_TASKS } from "../Api";
import createAsyncSlice from "./helper/createAsyncSlice";

// Criado uma constante chamada slice que recebe o retorno da função createAsyncSlice, que recebe um objeto contendo as configurações padrões do slice.
const slice = createAsyncSlice({
  name: "getTasks", // Define o nome do slice como getTasks.

  fetchConfig: () => GET_TASKS(), // A função fetchConfig está retornando a requisição da função GET_TASKS, que é responsável por fazer a requisição GET para a API, que retorna todas as tarefas cadastradas no banco de dados.
});

export const fetchGetTasks = slice.asyncAction; // Exporta a função fetchTasks que recebe o retorno da função asyncAction do slice.

export default slice.reducer; // Exporta o reducer do slice.
