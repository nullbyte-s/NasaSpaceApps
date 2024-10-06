const AdviceComponent = ({ alertMessage }) => {
  return (
    <div>
      <h2>Orientações</h2>
      {alertMessage ? (
        <p>{alertMessage}</p>
      ) : (
        <p>Nenhum alerta ativo no momento.</p>
      )}
    </div>
  );
};

export default AdviceComponent;
