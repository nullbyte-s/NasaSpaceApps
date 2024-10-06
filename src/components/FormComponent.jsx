import { useState } from "react";
import "../assets/Form.css"; // Certifique-se de estilizar conforme necessário

const FormComponent = () => {
  const [formData, setFormData] = useState({
    description: "",
    title: "",
    text: "",
  });

  const [showMessage, setShowMessage] = useState(false); // Estado para controlar a exibição da mensagem

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Exibe a divzinha com a mensagem ao enviar o formulário
    setShowMessage(true);

    // Limpa os inputs
    setFormData({
      description: "",
      title: "",
      text: "",
    });

    // Oculta a mensagem após 5 segundos
    setTimeout(() => setShowMessage(false), 5000);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="form-group">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Descrição</label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>

      {/* Exibe a divzinha com a mensagem após o envio */}
      {showMessage && (
        <div className="message-box">
          O alerta foi enviado para os outros usuários!
        </div>
      )}
    </div>
  );
};

export default FormComponent;
