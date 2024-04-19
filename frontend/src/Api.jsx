// A função GET_TASKS é responsável por fazer a requisição GET para a API, que retorna todas as tarefas cadastradas no banco de dados.
export const GET_TASKS = () => {
  // Retorna um objeto com a URL e as opções da requisição.
  return {
    // O url é a URL da API que será acessada.
    url: "http://localhost:3001/tasks",
    // O options é um objeto que contém as opções da requisição.
    options: {
      // O method é o método da requisição.
      method: "GET", // Define o método como GET, ou seja, está puxando dados da API.
      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        // O cabeçalho Content-Type informa o tipo de conteúdo que está sendo enviado no corpo da requisição.
        "Content-Type": "application/json",
      },
    },
  };
};

// A função POST_TASK é responsável por fazer a requisição POST para a API, que cria uma nova tarefa no banco de dados.
export const POST_TASK = (title) => {
  // Retorna um objeto com a URL e as opções da requisição.
  return {
    // O url é a URL da API que será acessada.
    url: "http://localhost:3001/tasks",
    // O options é um objeto que contém as opções da requisição.
    options: {
      // O method é o método da requisição.
      method: "POST", // Define o método como POST, ou seja, está enviando um dados para a API.
      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        "Content-Type": "application/json", // O cabeçalho Content-Type informa o tipo de conteúdo que está sendo enviado no corpo da requisição.
      },
      // O body é o corpo da requisição, está enviando um objeto passando o title da api e o status como pendente por padrão.
      body: JSON.stringify({ title, status: "pendente" }),
    },
  };
};

// A função DELETE_TASK é responsável por fazer a requisição DELETE para a API, que deleta uma tarefa do banco de dados.
export const DELETE_TASK = (id) => {
  return {
    // O url é a URL da API que será acessada.
    url: `http://localhost:3001/tasks/${id}`,
    // O options é um objeto que contém as opções da requisição.
    options: {
      // O method é o método da requisição.
      method: "DELETE", // Define o método como DELETE, ou seja, está deletando um dado da API.
      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        "Content-Type": "application/json", // O cabeçalho Content-Type informa o tipo de conteúdo que está sendo enviado no corpo da requisição.
      },
    },
  };
};

// A função PUT_TASK é responsável por fazer a requisição PUT para a API, que atualiza o título de uma tarefa no banco de dados.
export const PUT_TASK = ({id, title, status}) => {
  return {
    // O url é a URL da API que será acessada.
    url: `http://localhost:3001/tasks/${id}`,
    // O options é um objeto que contém as opções da requisição.
    options: {
      // O method é o método da requisição.
      method: "PUT", // Define o método como PUT, ou seja, está atualizando um dado da API.
      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        "Content-Type": "application/json", // O cabeçalho Content-Type informa o tipo de conteúdo que está sendo enviado no corpo da requisição.
      },
      // O body é o corpo da requisição, está enviando um objeto que contém o title e o status da tarefa.
      body: JSON.stringify({ title, status }),
    },
  };
};
