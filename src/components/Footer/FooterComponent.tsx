import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from "react-router-dom";
const FooterComponent = () => {
   
    const navigate = useNavigate();
  
    return ( 
        <footer className="footer">
  	 <div className="containerFooter">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Nosso Time</h4>
  	 			<ul>
  	 				<li><a onClick={()=> navigate("/members")}>Sobre Nós</a></li>
  	 				<li><a onClick={()=> navigate("/PrivacyPolicy")}>Politica de Privacidade</a></li>
  	 			
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Ajuda</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Opções de Pagamento</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contate-nos</h4>
                
  	 			<ul>
  	 				<li><a href="https://www.google.com.br/maps/place/Senac+Petr%C3%B3polis/@-22.5047454,-43.1863626,17z/data=!3m1!4b1!4m6!3m5!1s0x990807c6be3cdf:0xff1d91bdbb7ca9fb!8m2!3d-22.5047454!4d-43.1837877!16s%2Fg%2F1wrtf1s1?entry=ttu" target="_blank">Endereço: R. Alfredo Pachá, 26</a></li>
  	 				<li><p>Telefone: (24) 2017-6050</p></li>
  	 			
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Sigam-nos</h4>
  	 			<div className="social-links">
  	 				<a href="https://github.com/ajpf44/e-commerce-react" target="_blank">{<GitHubIcon className="icon-github"/>}<i className="Github" ></i></a>
  	 				<a href="https://www.instagram.com/jean.pires.397/" target="_blank">{<InstagramIcon className="icon-instagram" />}<i className="fab fa-instagram"></i></a>
  	 			
  	 			</div>
                   
  	 		</div>
            
              <p className="Copy">&copy; 2024 Página Desenvolvida pelos Fans do Jean. Todos os direitos reservados.</p>
  	 	</div>
  	 </div>
  </footer>
        
     );
}
 
export default FooterComponent;