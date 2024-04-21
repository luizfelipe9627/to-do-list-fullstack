import React from "react";

const Status = ({ tasks }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between items-center">
      <div className="flex gap-2">
        <h1 className="text-sm text-blue font-bold">Tarefas criadas</h1>
        <span className="text-gray-200 bg-gray-400 rounded-full py-[0.125rem] px-2 text-xs font-bold">
          {/* Se tasks for verdadeiro, ou seja, se existir tarefas, retorna o tamanho do array tasks, senão, retorna 0. */}
          {tasks ? tasks.length : 0}
        </span>
      </div>

      <div className="flex gap-2">
        <h1 className="text-sm text-purple font-bold">Concluídas</h1>
        <span className="text-gray-200 bg-gray-400 rounded-full py-[0.125rem] px-2 text-xs font-bold">
          {tasks
            // O map percorre o array tasks e a cada iteração verifica se o status da task é igual a "concluído", se for retorna 1.
            .map((task) => task.status === "concluído" && 1)
            // O reduce percorre o array retornado pelo map e a cada iteração soma o valor passado pelo map e armazena na variável acc, e o curr é o valor atual do array(começa com 0), e retorna a soma total.
            .reduce((acc, curr) => acc + curr, 0)} de {tasks ? tasks.length : 0}
        </span>
      </div>
    </div>
  );
};

export default Status;
