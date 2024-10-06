import { useState } from "react";
import "../assets/Form.css"; // Certifique-se de estilizar conforme necessário

const FormComponent = () => {
  const [formData, setFormData] = useState({
    description: "",
    title: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Não faz nada no momento
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
    </div>
  );
};

export default FormComponent;
