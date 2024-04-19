const Error = ({ error }) => {
  // Se não existir erro, retorna null, assim não exibirá nada.
  if (!error) return null;
  return <p className="text-danger my-4">{error}</p>;
};

export default Error;
