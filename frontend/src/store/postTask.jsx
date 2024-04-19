import { POST_TASK } from "../Api";
import createAsyncSlice from "./helper/createAsyncSlice";

// Criado uma constante chamada slice que recebe o retorno da função createAsyncSlice, que recebe um objeto contendo as configurações padrões do slice.
const slice = createAsyncSlice({
  name: "postTask", // Define o nome do slice como postTask.

  fetchConfig: (task) => POST_TASK(task), // A função fetchConfig está retornando a requisição da função POST_TASK, passando o task como parâmetro, fazendo a requisição POST para a API, que cria uma nova tarefa no banco de dados.
});

export const fetchPostTask = slice.asyncAction; // Exporta a função fetchPostTask que recebe o retorno da função asyncAction do slice.

export default slice.reducer; // Exporta o reducer do slice.
