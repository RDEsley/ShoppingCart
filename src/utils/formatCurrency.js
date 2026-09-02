const formatCurrency = (value, currency = 'BRL') =>
  value.toLocaleString('pt-BR', { style: 'currency', currency });

export default formatCurrency;
