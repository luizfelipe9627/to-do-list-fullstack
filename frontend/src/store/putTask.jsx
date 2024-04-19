import { PUT_TASK } from "../Api";
import createAsyncSlice from "./helper/createAsyncSlice";

// Criado uma constante chamada slice que recebe o retorno da função createAsyncSlice, que recebe um objeto contendo as configurações padrões do slice.
const slice = createAsyncSlice({
  name: "putTask", // Define o nome do slice como putTask.

  fetchConfig: ({id, title, status}) => PUT_TASK({id, title, status}), // A função fetchConfig está retornando a requisição da função PUT_TASK, passando um objeto que contém id, title e status como parâmetro, fazendo a requisição PUT para a API, que atualiza o título e o status de uma tarefa no banco de dados.
});

export const fetchPutTask = slice.asyncAction; // Exporta a função fetchPutTask que recebe o retorno da função asyncAction do slice.

export default slice.reducer; // Exporta o reducer do slice.
