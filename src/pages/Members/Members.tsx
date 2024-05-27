import './Members.css';
import { MembersData } from '../../Data/dataMembers';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Card } from '@mui/material';

const MembersPage = () => {
  const handleButtonClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pageContainer">
      <div className="headerText">
        <h1>Bem-vindo à Página de Membros</h1>
        <p>Conheça nossos membros da equipe e conecte-se com eles nas suas plataformas sociais!</p>
      </div>
      <div className="containerMembers">
        {MembersData.map((curElem) => (
          <div className="card_item" key={curElem.id}>
            <Card className="card_inner">
              <div className="detail-box">
                <img src={curElem.avatar_url} alt="" />
              </div>
              <button className="seeMore" onClick={() => handleButtonClick(curElem.github_url)}>
                <GitHubIcon />
              </button>
              <button className="seeMore" onClick={() => handleButtonClick(curElem.linkedin_url)}>
                <LinkedInIcon />
              </button>
              <button className="seeMore" onClick={() => handleButtonClick(curElem.email_url)}>
                <EmailIcon />
              </button>
              <button className="seeMore" onClick={() => handleButtonClick(curElem.instagram_url)}>
                <InstagramIcon />
              </button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersPage;
