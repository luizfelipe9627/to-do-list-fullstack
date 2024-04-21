const Error = ({ error }) => {
  // Se não existir erro, retorna null, assim não exibirá nada.
  if (!error) return null;
  return <p className="text-danger">{error}</p>;
};

export default Error;
