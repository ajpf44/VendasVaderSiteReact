import React, { useState } from 'react';
import { Typography, Button, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const handleConfirmPayment = () => {
    // Verificar se uma opção foi selecionada antes de confirmar o pagamento
    if (selectedPaymentMethod) {
      // Lógica para confirmar o pagamento que não vamos incluir pois não é o propósito do projeto nesta etapa. Não queremos problemas legais :D. 
     
      //INCLUINDO SOMENTE PARA QUE AO FINALIZAR A COMPRA VÁ PARA A PÁGINA INICIAL DO SITE.
      navigate('/');

    } else {
      alert('Selecione um método de pagamento antes de continuar.');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Métodos de Pagamento
      </Typography>
      <RadioGroup
        value={selectedPaymentMethod}
        onChange={handleChange}
      >
        <FormControlLabel
          value="credit_card"
          control={<Radio />}
          label="Cartão de Crédito"
        />
        <FormControlLabel
          value="debit_card"
          control={<Radio />}
          label="Cartão de Débito"
        />
        <FormControlLabel
          value="pix"
          control={<Radio />}
          label="PIX"
        />
        <FormControlLabel
          value="bank_transfer"
          control={<Radio />}
          label="Transferência Bancária"
        />
        <FormControlLabel
          value="boleto"
          control={<Radio />}
          label="Boleto Bancário"
        />
        <FormControlLabel
          value="paypal"
          control={<Radio />}
          label="PayPal"
        />
        <FormControlLabel
          value="apple_pay"
          control={<Radio />}
          label="Apple Pay"
        />
        <FormControlLabel
          value="google_pay"
          control={<Radio />}
          label="Google Pay"
        />
        <FormControlLabel
          value="bitcoin"
          control={<Radio />}
          label="Bitcoin"
        />
        <FormControlLabel
          value="DANCINHA DO JEAN NO ONLYFANS"
          control={<Radio color="primary" />}
          label="DANCINHA DO JEAN NO ONLYFANS"
        />

      </RadioGroup>
      <Button variant="contained" color="primary" onClick={handleConfirmPayment}>
        Confirmar Pagamento
      </Button>
    </Box>
  );
};

export default PaymentPage;

