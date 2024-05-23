import React, { useState, useContext, FormEvent } from "react";
import { SessionContextType, SessionContext } from "../../../contexts/SessionContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { signin } = useContext<SessionContextType>(SessionContext);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      const userToken = await signin(email, password);

      if (!userToken) {
        setError("Corrija os dados!");
      }
    } catch (err) {
      setError("Erro tente mais tarde.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate("/signup")}>SignUp </button>
    </>
  );
};

export default Login;
