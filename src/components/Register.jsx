import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Register.css"; // Arquivo CSS para o estilo

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    if (formData.password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setError("");
    navigate("/"); // Redireciona para a página inicial ou para outra rota
  };

  return (
    <div className="register-container">
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome e Sobrenome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu Nome e Sobrenome"
            required
          />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu E-mail"
            required
          />
        </div>
        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Digite sua Senha"
            required
          />
        </div>
        <div className="form-group">
          <label>Confirme a Senha</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirme sua Senha"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group terms">
          <p>
            Ao clicar em Cadastrar, você aceita e concorda com nossos{" "}
            <a href="/terms">termos de uso</a> e{" "}
            <a href="/privacy">políticas de privacidade</a>.
          </p>
        </div>
        <button type="submit" className="register-button">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
