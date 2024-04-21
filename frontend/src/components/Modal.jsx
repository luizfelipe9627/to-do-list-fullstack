import React from "react";
import { useModal } from "../context/ModalContext";
import { useDispatch } from "react-redux";
import { fetchDeleteTask } from "../store/deleteTask";

const Modal = () => {
  const { isOpenModal, setIsOpenModal, taskIdToDelete } = useModal(); // Está desestruturando o useModal que é responsável por acessar o estado global da aplicação, e pegando a o estado isOpenModal, e as funções atualizadoras setIsOpenModal e taskIdToDelete.

  const dispatch = useDispatch(); // Está executando o hook useDispatch que é responsável por acessar o dispatch da store que dispara as ações, e armazena na constante dispatch.

  // Função chamada handleConfirm que é responsável por deletar a tarefa.
  const handleConfirm = () => {
    dispatch(fetchDeleteTask(taskIdToDelete)); // O dispatch executa a função fetchDeleteTask que é responsável por fazer a requisição DELETE para a API, que deleta a tarefa no banco de dados, passando o id como parâmetro.
    setIsOpenModal(false); // Fecha o modal.
  };

  // Função chamada handleCancel que é responsável por fechar o modal.
  const handleCancel = () => {
    setIsOpenModal(false); // Fecha o modal.
  };

  // O useEffect vai ser executado toda vez que o estado isOpenModal, ou seja, o modal for aberto ou fechado.
  React.useEffect(() => {
    // Se o modal estiver aberto, então executa o if, senão executa o else.
    if (isOpenModal) {
      document.body.style.overflow = "hidden"; // Altera o estilo do body para hidden, para que o usuário não consiga rolar a página.
    } else {
      document.body.style.overflow = ""; // Altera o estilo do body para vazio, para que o usuário consiga rolar a página.
    }

    // Função que é executada toda vez que o componente for desmontado.
    return () => {
      document.body.style.overflow = ""; // Altera o estilo do body para vazio, para que o usuário consiga rolar a página.
    };
  }, [isOpenModal]);

  return (
    <div
      className={`fixed w-screen h-screen bg-transparent flex justify-center items-center opacity-100 visible duration-[1.2s] z-50 font-Inter ${
        isOpenModal ? "" : "invisible"
      }`}
      onClick={() => setIsOpenModal(false)}
    >
      <div
        className={`bg-gray-600 relative flex p-4 rounded-xl max-w-[90vw] ${
          isOpenModal ? "animate-bottom" : "animate-top"
        }`}
        // Ao clicar no modal(o filho), ele pega o evento e não deixa o pai ser clicado, o stopPropagation impede que o evento seja propagado(ou seja, que suba para o pai) e o modal não fecha.
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-gray-100 p-1 md:max-w-[28.125rem]">
          <h1 className="text-2xl font-bold">Janela de confirmação</h1>

          <p className="my-4">
            Você está prestes a deletar uma tarefa. Tem certeza que deseja fazer
            isso?
          </p>

          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <button
              className="py-2 bg-success text-white rounded-lg hover:bg-red-600 transition-colors duration-300 w-full font-bold hover:opacity-80"
              // Ao clicar no botão, executa a função handleConfirm.
              onClick={handleConfirm}
            >
              Sim
            </button>
            <button
              className="py-2 bg-danger text-white rounded-lg transition-colors duration-300 w-full font-bold hover:opacity-80"
              // Ao clicar no botão, executa a função handleCancel.
              onClick={handleCancel}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
