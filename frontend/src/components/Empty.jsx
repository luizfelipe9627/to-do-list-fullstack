import clipboard from "../assets/img/clipboard.png";

const Empty = () => {
  return (
    <div className="flex flex-col justify-center items-center p-16 text-gray-300 text-base">
      <img src={clipboard} alt="Clipboard icon" className="mb-4" />
      <h1 className="font-bold">Você ainda não tem tarefas cadastradas</h1>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};

export default Empty;
