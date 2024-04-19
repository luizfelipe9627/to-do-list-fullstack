import React from "react";
import check from "../../assets/svg/check.svg";

const Checkbox = ({ id, isChecked, onChange }) => {
  return (
    <label
      htmlFor={`checkbox-${id}`}
      className="flex gap-3 pointer-events-none relative"
    >
      <input
        type="checkbox"
        name={`checkbox-${id}`}
        id={`checkbox-${id}`}
        className="relative appearance-none rounded-full w-[18px] h-[18px] border-2 border-blue checked:bg-purple-dark checked:border-purple-dark cursor-pointer pointer-events-auto hover:border-blue-dark hover:bg-blue-dark hover:bg-opacity-40 hover:checked:bg-purple hover:checked:border-purple focus:outline-none transition-colors duration-200 ease-in-out"
        // Se isChecked for true, o checkbox estará marcado, senão, não estará marcado.
        checked={isChecked}
        // Quando o checkbox for clicado, executa a função onChange.
        onChange={onChange}
      />
      {/* Se isChecked for true, renderiza a imagem do ícone de check. */}
      {isChecked && (
        <img
          src={check}
          alt="Checked Icon"
          className="absolute top-0 left-0 right-0 bottom-0 m-auto"
        />
      )}
    </label>
  );
};

export default Checkbox;
