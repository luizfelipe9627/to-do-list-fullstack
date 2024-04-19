// Criado um componente chamado Input que está recebendo as props type, name, value, onChange, onBlur e error como valor padrão false.
const Input = ({
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
  className,
}) => {
  return (
    // Cria um input com o type e name recebidos como props.
    <input
      // Criado um atributo data-error que recebe o valor do estado error, se o error for verdadeiro o data-error será true, caso contrário será false.
      data-error={error}
      // A classe do input é a classe recebida como props.
      className={className}
      type={type}
      name={name}
      id={name}
      // O valor do input é o valor do estado value, ou seja, o que está sendo digitado no input.
      value={value}
      // O placeholder do input é o placeholder recebido como props.
      placeholder={placeholder}
      // Quando houver uma alteração no input, a função onChange responsável por atualizar o estado value será chamada.
      onChange={onChange}
    />
  );
};

export default Input; // Exportando o componente Input.
