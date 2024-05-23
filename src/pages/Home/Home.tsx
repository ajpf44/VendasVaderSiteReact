import React, { useContext } from 'react';
import { getAllUsers } from '../../services/users';
import { SessionContext } from '../../contexts/SessionContext';

const Home: React.FC = () => {
  
  const sessionCtx = useContext(SessionContext);

  return (
    <div>
      <h1>Projeto React Web - Ecommerce</h1>

      {sessionCtx.user?.name ? <p>Olá usuário {sessionCtx.user?.name}</p>: ""}
      
      <button
        onClick={()=>getAllUsers()}
      >Console usuários</button>
      <p>Como importa no váriaveis de ambiente no código: {import.meta.env.VITE_foo_var}</p>
    </div>
  );
};

export default Home;