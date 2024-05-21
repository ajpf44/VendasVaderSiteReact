import React from 'react';

interface MemberCardProps {
  name: string;
  role: string;
  email: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default MemberCard;


// Definim as propriedades que o componente MemberCard deve receber.
// O componente MemberCard recebe as propriedades de nome, cargo e email.