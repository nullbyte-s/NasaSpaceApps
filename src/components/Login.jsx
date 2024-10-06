import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Login.css"; // Estilos que serão criados para o layout

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validações
    if (!validateEmail(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    // Redirecionamento se email e senha estiverem corretos
    if (email === "spaceapps@gmail.com" && password === "nasa123") {
      setError("");
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      setError("Email ou senha inválidos");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="branding">
          <img src="/path_to_logo.png" alt="Palma Logo" className="logo" />
          <h1>O CLIMA</h1>
          <p>NA PALMA DA SUA MÃO</p>
        </div>
        <div className="social-icons">
          {/* Ícones de redes sociais */}
          <i className="fab fa-instagram"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-x"></i>
        </div>
      </div>
      <div className="login-right">
        <h2>Faça Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-footer">
          <button onClick={() => navigate("/forgot-password")}>
            Esqueceu sua senha?
          </button>
          <p>
            Ainda não possui cadastro?{" "}
            <button onClick={() => navigate("/register")}>Cadastre-se</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
