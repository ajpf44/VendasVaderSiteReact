import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container">
      <h1>Política de Privacidade</h1>

      <div className="section">
        <h2>1. Introdução</h2>
        <p>
          Bem-vindo à nossa loja online. Esta política de privacidade descreve como
          coletamos, usamos e protegemos suas informações pessoais quando você visita
          nosso site e faz uma compra.
        </p>
      </div>

      <div className="section">
        <h2>2. Formas de Pagamento</h2>
        <p>
          Aceitamos os seguintes métodos de pagamento: cartão de crédito, cartão de débito, PayPal, transferência bancária, entre outros. Todas as transações financeiras são processadas com segurança e criptografadas.
        </p>
      </div>

      <div className="section">
        <h2>3. Informações que Coletamos</h2>
        <p>
          Coletamos diferentes tipos de informações para fornecer e melhorar nossos
          serviços, incluindo:
        </p>
        <ul>
          <li>Informações Pessoais: Nome, endereço de e-mail, endereço de entrega, número de telefone, etc.</li>
          <li>Informações de Pagamento: Dados do cartão de crédito ou outras informações de pagamento.</li>
          <li>Informações de Navegação: Endereço IP, tipo de navegador, páginas visitadas, tempo gasto no site, etc.</li>
        </ul>
      </div>

      <div className="section">
        <h2>4. Uso das Informações</h2>
        <p>Usamos suas informações para os seguintes propósitos:</p>
        <ul>
          <li>Processar e gerenciar suas compras e pedidos.</li>
          <li>Melhorar nosso site e serviços.</li>
          <li>Enviar atualizações, promoções e comunicações relacionadas ao nosso e-commerce.</li>
          <li>Garantir a segurança e integridade de nosso site.</li>
        </ul>
      </div>

      <div className="section">
        <h2>5. Compartilhamento de Informações</h2>
        <p>Não compartilhamos suas informações pessoais com terceiros, exceto:</p>
        <ul>
          <li>Com prestadores de serviços que nos ajudam a operar nosso site e negócios.</li>
          <li>Quando exigido por lei ou para proteger nossos direitos legais.</li>
        </ul>
      </div>

      <div className="section">
        <h2>6. Segurança das Informações</h2>
        <p>
          Implementamos medidas de segurança para proteger suas informações pessoais
          contra acesso, alteração, divulgação ou destruição não autorizados. No entanto,
          nenhum método de transmissão pela Internet ou método de armazenamento
          eletrônico é 100% seguro.
        </p>
      </div>

      <div className="section">
        <h2>7. Seus Direitos</h2>
        <p>
          Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Se
          desejar exercer esses direitos, entre em contato conosco através das informações
          de contato fornecidas abaixo.
        </p>
      </div>

      <div className="section">
        <h2>8. Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta política de privacidade periodicamente. Notificaremos
          sobre quaisquer alterações publicando a nova política de privacidade em nosso
          site.
        </p>
      </div>

      <div className="section">
        <h2>9. Contato</h2>
        <p>Se você tiver alguma dúvida sobre esta política de privacidade, entre em contato conosco:</p>
        <p>Email: suporte@seuecommerce.com<br />Telefone: (24) 2017-6050</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
