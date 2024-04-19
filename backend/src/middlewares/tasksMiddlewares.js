// Criado um middleware chamado validateBody que recebe três parâmetros, a requisição feita pelo cliente, a resposta que será enviada para o cliente e o próximo middleware a ser chamado. Esse middleware será responsável por validar o corpo da requisição do método POST.
const validatePostBody = (req, res, next) => {
  const { body } = req; // Desestrutura o objeto request, pegando o body, que é o corpo da requisição.

  // Se a chave title do corpo da requisição não existir ou estiver vazia, executa o if.
  if (!body.title || body.title === "") {
    // Retorna um status 400(bad request) e uma mensagem informando que o campo title é obrigatório.
    return res.status(400).json({
      message: 'O campo "title" é obrigatório.',
    });
  }

  next(); // Chama o próximo middleware a ser executado, no caso a função do controller que será chamada pela rota.
};

// Criado um middleware chamado validatePutBody que recebe três parâmetros, a requisição feita pelo cliente, a resposta que será enviada para o cliente e o próximo middleware a ser chamado. Esse middleware será responsável por validar o corpo da requisição, do método PUT.
const validatePutBody = (req, res, next) => {
  const { body } = req; // Desestrutura o objeto request, pegando o body, que é o corpo da requisição.

  // Se a chave title do corpo da requisição estiver não existir ou estiver vazia, executa o if.
  if (!body.title || body.title === "") {
    return res.status(400).json({ message: 'O campo "title" é obrigatório.' }); // Retorna um status 400(bad request) e uma mensagem informando que o campo title é obrigatório.
  }

  // Se a chave status do corpo da requisição não existir ou estiver vazia, executa o if.
  if (!body.status || body.status === "") {
    return res.status(400).json({ message: 'O campo "status" é obrigatório.' }); // Retorna um status 400(bad request) e uma mensagem informando que o campo status é obrigatório.
  }

  next(); // Chama o próximo middleware a ser executado, no caso a função do controller que será chamada pela rota.
};

// Exporta as funções para serem utilizadas em outros arquivos.
module.exports = {
  validatePostBody,
  validatePutBody,
};
