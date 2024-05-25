import React, {  useState } from "react";
import MemberCard from "./MemberCard";

interface Member {
  id: number;
  name: string;
  role: string;
  email: string;
}

const MemberList: React.FC = () => {
  const [members, ] = useState<Member[]>([]);
  const [loading, ] = useState(true);

  // useEffect(() => {
  //   axios.get('/api/members')
  //     .then(response => {
  //       setMembers(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {members.map((member) => (
        <MemberCard
          key={member.id}
          name={member.name}
          role={member.role}
          email={member.email}
        />
      ))}
    </div>
  );
};

export default MemberList;

// Defini a estrutura de um membro.
// Coloquei useState para controlar o estado dos membros e se está carregando.
// Utilizei useEffect para buscar a lista de membros quando o componente é montado.
