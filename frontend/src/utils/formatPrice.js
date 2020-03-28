export default number =>
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    number
  );
