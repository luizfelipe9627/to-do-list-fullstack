// Importa as bibliotecas.
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Importa os componentes.
import CreateButton from "../Button/CreateButton";
import Input from "../Input/Input";
import Empty from "../Empty";
import TaskItem from "./TaskItem";
import Status from "../Status";
import Error from "../../helper/Error";

// Importa as actions do redux.
import { fetchGetTasks } from "../../store/getTasks";
import { fetchPostTask } from "../../store/postTask";
import { fetchDeleteTask } from "../../store/deleteTask";
import Pagination from "../Pagination";

const Tasks = () => {
  const [inputValue, setInputValue] = React.useState(""); // Criado um estado chamada inputValue e a função setInputValue que altera o estado task. Sendo o valor inicial uma string vazia.
  const [error, setError] = React.useState(false); // Criado um estado chamada error e a função setError que altera o estado error. Sendo o valor inicial false.
  const [currentPage, setCurrentPage] = React.useState(1); // Criado um estado chamado currentPage e uma função atualizadora chamada setCurrentPage. O estado currentPage começa com o valor 1.

  const dispatch = useDispatch(); // Está executando o hook useDispatch que é responsável por acessar o dispatch da store que dispara as ações, e armazena na constante dispatch.

  // Está desestruturando o state.getTasks para pegar a propriedade data, loading e error. O useSelector é responsável por acessar o estado global da aplicação.
  const {
    data: getTasks,
    loading,
    error: errorGetTasks,
  } = useSelector((state) => state.getTasks);

  const { data: postData } = useSelector((state) => state.postTask); // Está desestruturando o state.postTask para pegar a propriedade data e renomeando para postData. O useSelector é responsável por acessar o estado global da aplicação.

  const { data: deleteData } = useSelector((state) => state.deleteTask); // Está desestruturando o state.deleteTask para pegar a propriedade data e renomeando para deleteData. O useSelector é responsável por acessar o estado global da aplicação.

  const { data: putData } = useSelector((state) => state.putTask); // Está desestruturando o state.putTask para pegar a propriedade data e renomeando para putData. O useSelector é responsável por acessar o estado global da aplicação.

  const itemsPerPage = 10; // Criado uma constante chamada itemsPerPage e definido o valor 10.
  const indexOfLastItem = currentPage * itemsPerPage; // Criado uma constante chamada indexOfLastItem que recebe o valor da página atual multiplicado pelo número de itens por página, ou seja, se a página atual for 1, então indexOfLastItem será 10, se a página atual for 2, então indexOfLastItem será 20, se a página atual for 3, então indexOfLastItem será 30 e assim por diante.
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Criado uma constante chamada indexOfFirstItem que recebe o valor da última página menos o número de itens por página, ou seja, se a página atual for 1, então indexOfFirstItem será 0, se a página atual for 2, então indexOfFirstItem será 10, se a página atual for 3, então indexOfFirstItem será 20 e assim por diante.

  // Criado uma constante chamada currentItems que verifica se getTasks é um array, se for, então pega os itens do array getTasks que estão entre o indexOfFirstItem e o indexOfLastItem, senão, retorna um array vazia.
  const currentItems = Array.isArray(getTasks)
    ? getTasks.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  // O useEffect vai ser executado toda vez que o componente for renderizado pela primeira vez.
  React.useEffect(() => {
    dispatch(fetchGetTasks()); // Executa fetchGetTasks para buscar as tarefas.
  }, [dispatch]);

  // O useEffect vai ser executado toda vez que o estado deleteData ou postData for alterado.
  React.useEffect(() => {
    // Se o estado deleteData for true ou seja a tarefa foi deletada, ou o estado postData for true ou seja a tarefa foi cadastrada, executa o bloco de código abaixo.
    if (deleteData || postData || putData) {
      dispatch(fetchGetTasks()); // Executa a função fetchGetTasks que é responsável por fazer a requisição GET para a API, que busca as tarefas no banco de dados.
    }
  }, [dispatch, deleteData, postData, putData]);

  // Função chamada validateInput que não recebe parâmetros, responsável por validar o input.
  const validateInput = () => {
    return inputValue.trim() === "" ? setError(true) : setError(false); // Se o valor do estado value for uma string vazia, altera o estado error para true, se não altera para false.
  };

  // Função chamada handleInput que recebe o evento como parâmetro, responsável por alterar o estado task que é o valor digitado no input.
  const handleInput = (event) => {
    setInputValue(event.target.value); // Altera o estado inputValue para o valor digitado no input.

    // Se existir erro no estado error, executa o if.
    if (error) {
      setError(false); // Altera o estado error para false, ou seja, o input está válido.
    }
  };

  // Função chamada postTask que recebe o evento como parâmetro, responsável por cadastrar uma nova tarefa.
  const postTask = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário que é recarregar a página.

    if (!validateInput()) return; // Se a função validateInput retornar false, ou seja não foi digitado nada no input, não executa o bloco de código abaixo.

    dispatch(fetchPostTask(inputValue)); // O dispatch executa a função fetchPostTask que é responsável por fazer a requisição POST para a API, que cadastra a tarefa no banco de dados, passando o inputValue como parâmetro.

    setInputValue(""); // Limpa o input após cadastrar a tarefa.
  };

  // Função chamada deleteTask que recebe o id como parâmetro, responsável por deletar uma tarefa.
  const deleteTask = (id) => {
    // Se o usuário confirmar a exclusão da tarefa, executa o if.
    if (window.confirm("Deseja realmente deletar essa tarefa?")) {
      dispatch(fetchDeleteTask(id)); // O dispatch executa a função fetchDeleteTask que é responsável por fazer a requisição DELETE para a API, que deleta a tarefa no banco de dados, passando o id como parâmetro.
    }
  };

  return (
    <section className="max-w-[90vw] lg:max-w-[60vw] m-auto min-h-screen">
      <form
        className="inline-flex relative -top-7 w-full gap-2"
        // Ao enviar o formulário, executa a função postTask.
        onSubmit={postTask}
      >
        <Input
          name="task"
          className="p-4 rounded-lg placeholder-gray-300 text-gray-100 bg-gray-500 border border-gray-700 outline-none focus:border-purple-dark hover:border-purple-dark w-full data-[error=true]:border-danger transition-colors duration-200 ease-in-out"
          // O valor do input é o estado inputValue, ou seja, o que o usuário digitar no input.
          value={inputValue}
          // Cada vez que o input for alterado, ou seja o usuário digitar algo, executa a função handleInput.
          onChange={handleInput}
          placeholder="Adicione uma nova tarefa"
          // Passa o estado error para o componente Input.
          error={error}
        />
        <CreateButton />
      </form>

      <div className="py-9">
        {/* Se não existir erro no estado errorGetTasks, o loading for false, existir dados no data do estado getTasks e o tamanho do array for maior que 0, executa o bloco de código abaixo. */}
        {!errorGetTasks && !loading && getTasks && getTasks.length > 0 && (
          <>
            {/* Chama o componente Status, passando a prop tasks que é o array getTasks. */}
            <Status tasks={getTasks} />

            <ul className="flex flex-col gap-3 mt-6">
              {/* O map percorre o array currentItems que contém as tarefas e retorna um componente TaskItem para cada item do array. */}
              {currentItems.map((task) => {
                return (
                  <TaskItem
                    key={task.id}
                    // Passa o id da task para o componente TaskItem.
                    id={task.id}
                    // Passa o title da task para o componente TaskItem.
                    title={task.title}
                    // Passa o status da task para o componente TaskItem.
                    status={task.status}
                    // Passa a função deleteTask para o componente TaskItem.
                    deleteTask={deleteTask}
                  />
                );
              })}
            </ul>
          </>
        )}

        {/* Se existir dados no data do estado getTasks(vai existir pois o valor inicial é uma array vazia) e o tamanho do array for maior que 10, renderiza o componente Pagination. */}
        {getTasks && getTasks.length > 10 && (
          <Pagination
            // Passa como propriedade o número de itens por página.
            itemsPerPage={itemsPerPage}
            // Passa como propriedade o número total de transações.
            totalItems={getTasks.length}
            // Passa como propriedade a página atual.
            currentPage={currentPage}
            // Passa como propriedade a função atualizadora da página atual.
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* Se existir dados no data do estado getTasks(vai existir pois o valor inicial é uma array vazia) e o tamanho do array for igual a 0, renderiza o componente Empty. */}
        {getTasks && getTasks.length === 0 && <Empty />}

        {/* Se existir erro no estado errorGetTasks, exibe a mensagem. */}
        {errorGetTasks && <Error error={errorGetTasks} />}

        {/* Se o loading for true, ou seja a requisição está em andamento, exibe a mensagem. */}
        {loading && <p>Carregando...</p>}
      </div>
    </section>
  );
};

export default Tasks;
