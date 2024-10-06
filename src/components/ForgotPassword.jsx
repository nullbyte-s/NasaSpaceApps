import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Valida o email antes de enviar
    if (!validateEmail(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    // Simulação de envio de email
    setTimeout(() => {
      setError("");
      setSuccessMessage(
        "Um e-mail de recuperação de senha foi enviado, verifique sua caixa de entrada."
      );
      setEmail(""); // Limpa o campo de email
    }, 1000);
  };

  return (
    <div className="forgot-password-container">
      <h2>Esqueceu sua Senha?</h2>
      <p>Insira o seu e-mail, enviaremos um link para redefinição de senha.</p>

      <form onSubmit={handleSubmit} className="forgot-password-form">
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

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
