// Importa as bibliotecas.
import React from "react";

// Importa os componentes.
import DeleteButton from "../Button/DeleteButton";
import Checkbox from "../Input/Checkbox";
import EditButton from "../Button/EditButton";
import Input from "../Input/Input";

// Importa as actions do redux.
import { useDispatch } from "react-redux";
import { fetchPutTask } from "../../store/putTask";

const TaskItem = ({ id, title, deleteTask, status }) => {
  const [inputValue, setInputValue] = React.useState(""); // Criado um estado chamado inputValue e a função setInputValue que altera o estado value. O valor inicial é o title da task.
  const [isChecked, setIsChecked] = React.useState(false); // Criado um estado chamado isChecked e a função setIsChecked que altera o estado isChecked. O valor inicial é false.
  const [isEditing, setIsEditing] = React.useState(false); // Criado um estado chamado isEditing e a função setIsEditing que altera o estado isEditing. O valor inicial é false.
  const [isDeleted, setIsDeleted] = React.useState(false); // Criado um estado chamado isDeleted e a função setIsDeleted que altera o estado isDeleted. O valor inicial é false.
  const [error, setError] = React.useState(false); // Criado um estado chamado error e a função setError que altera o estado error. O valor inicial é false.

  const dispatch = useDispatch(); // Está executando o hook useDispatch que é responsável por acessar o dispatch da store que dispara as ações, e armazena na constante dispatch.

  // O useEffect vai ser executado toda vez que o estado status for alterado.
  React.useEffect(() => {
    // Se o status for igual a "concluído", executa o if, se não executa o else.
    if (status === "concluído") {
      setIsChecked(true); // Altera o estado isChecked para true, ou seja, a tarefa está concluída.
    } else {
      setIsChecked(false); // Altera o estado isChecked para false, ou seja, a tarefa está pendente.
    }
  }, [status]);

  // Função chamada validateInput que não recebe parâmetros, responsável por validar o input.
  const validateInput = () => {
    return inputValue.trim() === "" ? setError(true) : setError(false); // Se o valor do estado value for uma string vazia, altera o estado error para true, se não altera para false.
  };

  // Função chamada updateTask que não recebe parâmetros, responsável por atualizar a tarefa.
  const updateTask = () => {
    setIsChecked(!isChecked); // Altera o estado isChecked para o valor contrário do estado atual, ou seja, se for true, passa a ser false e vice-versa.

    // Verifica se isChecked é true após a atualização do estado, pois o estado é assíncrono e não é atualizado imediatamente.
    if (!isChecked) {
      dispatch(fetchPutTask({ id, title, status: "concluído" })); // Dispara a action fetchPutTask passando um objeto que contém o id, title e status da tarefa, realizando a requisição PUT para a API, que atualiza o título e o status de uma tarefa no banco de dados.
    } else {
      dispatch(fetchPutTask({ id, title, status: "pendente" })); // Dispara a action fetchPutTask passando um objeto que contém o id, title e status da tarefa, realizando a requisição PUT para a API, que atualiza o título e o status de uma tarefa no banco de dados.
    }
  };

  // Função chamada editTask que não recebe parâmetros, responsável por editar a tarefa.
  const editTask = () => {
    setInputValue(title); // Atualiza o estado inputVale com o title da task.
    setIsEditing(!isEditing); // Altera o estado isEditing para o valor contrário do estado atual, ou seja, se for true, passa a ser false e vice-versa.
  };

  // Função chamada handleInput que recebe um parâmetro e, responsável por atualizar o estado inputValue.
  const handleInput = (e) => {
    setInputValue(e.target.value); // Atualiza o estado inputValue com o valor digitado no input.

    // Se existir erro no estado error, executa o if.
    if (error) {
      setError(false); // Altera o estado error para false, ou seja, o input está válido.
    }
  };

  // Função chamada sendTask que recebe um parâmetro e, responsável por enviar a tarefa.
  const sendTask = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário.

    if (validateInput()) return; // Se a função validateInput retornar true, ou seja, se o input for inválido, continua o código abaixo.

    dispatch(fetchPutTask({ id, title: inputValue, status })); // Dispara a action fetchPutTask passando um objeto que contém o id, o title que é o valor do estado inputValue e o status da tarefa, realizando a requisição PUT para a API, que atualiza o título e o status de uma tarefa no banco de dados.
  };

  return (
    <li
      className="flex items-center bg-gray-500 border border-gray-400 p-4 rounded-lg shadow-md gap-4"
      key={id}
    >
      {/* Chama o componente Checkbox, passando as props isChecked, setIsChecked, id e onChange. */}
      <Checkbox
        // Passa o estado isChecked para o componente Checkbox.
        isChecked={isChecked}
        // Passa a função atualizadora setIsChecked para o componente Checkbox.
        setIsChecked={setIsChecked}
        // Passa o id da task para o componente Checkbox.
        id={id}
        // Passa a função updateTask para o componente Checkbox.
        onChange={updateTask}
      />

      {isEditing ? (
        <form className="flex w-full" onSubmit={sendTask}>
          <Input
            className="w-full bg-gray-400 rounded-s-md text-sm text-gray-100 data-[error=true]:border-danger border border-gray-400 outline-none focus:border-gray-300 hover:border-gray-300 transition-colors duration-200 ease-in-out border-r-0 h-5"
            placeholder="Digite aqui..."
            // Passa o estado inputValue para o componente Input.
            value={inputValue}
            // A cada alteração no input, executa a função handleInput.
            onChange={handleInput}
            // Passa o estado error para o componente Input.
            error={error}
          />
          <button className="bg-blue-dark text-gray-100 text-sm px-1 rounded-r-md hover:bg-blue font-bold transition-colors duration-200 ease-in-out">
            Atualizar
          </button>
        </form>
      ) : (
        <p
          className={`break-all text-sm text-gray-100 first-letter:capitalize w-full ${
            status === "concluído" && "line-through text-gray-300"
          }`}
        >
          {title}
        </p>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <>
            {/* Chama o componente EditButton, que ao clicar executa a função editTask e passa a propriedade isClose como true, fazendo com que o botão tenha a aparência de um botão de fechar. */}
            <EditButton onClick={editTask} isClose={true} />
          </>
        ) : (
          <>
            {/* Chama o componente EditButton, que ao clicar executa a função editTask. */}
            <EditButton onClick={editTask} />
          </>
        )}

        {/* Chama o componente DeleteButton, que ao clicar executa a função deleteTask passando o id da task como parâmetro. */}
        <DeleteButton onClick={() => deleteTask(id)} />
      </div>
    </li>
  );
};

export default TaskItem;
