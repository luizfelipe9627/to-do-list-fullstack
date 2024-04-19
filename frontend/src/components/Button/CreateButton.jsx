import plus from "../../assets/svg/plus.svg";

const CreateButton = () => {
  return (
    <button className="inline-flex items-center p-4 gap-2 bg-blue-dark rounded-lg text-sm font-bold text-gray-100 hover:bg-blue h-14">
      <p>Criar</p>
      <img src={plus} alt="Plus icon" className="max-w-none" />
    </button>
  );
};

export default CreateButton;
