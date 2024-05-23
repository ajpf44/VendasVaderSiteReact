import React from 'react';
import { getAllUsers } from '../../services/users';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Projeto React Web - Ecommerce</h1>
      <button
        onClick={()=>getAllUsers()}
      >Console usuários</button>
      <p>Como importa no váriaveis de ambiente no código: {import.meta.env.VITE_foo_var}</p>
    </div>
  );
};

export default Home;