import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError("Deu RUIM");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;

// Criei o componente Login que vai lidar com o formulário de login.
// Utilizei o useContext para pegar a função de login do contexto de autenticação.
// Usei useState para controlar o estado dos campos de email, senha e erros.
// Função para o envio do formulário.
// Tentei fazer login com o email e a senha.
// Se o login der ruim  defini um erro para exibir.
