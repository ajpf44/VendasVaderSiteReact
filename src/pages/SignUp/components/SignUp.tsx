import React, { useState, useContext } from "react";
import { SessionContextType, SessionContext } from "../../../contexts/SessionContext";
import { useNavigate } from "react-router-dom";
const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { signup } = useContext<SessionContextType>(SessionContext);

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      const token = await signup(email, password, "");
      navigate("/login");
      if (token) {
        console.log("Resgistrado com Sucesso!");
      } else {
        setError("Erro ao registrar");
      }
    } catch (err) {
      setError("erro durante registro");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignIn;
