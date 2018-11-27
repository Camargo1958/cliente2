const filter = ((value) => {
  if (!value) return '';
  let cpf = '';
  cpf += value.substring(0, 3);
  cpf += '.';
  cpf += value.substring(3, 6);
  cpf += '.';
  cpf += value.substring(6, 9);
  cpf += '-';
  cpf += value.substring(9, value.length);
  return cpf;
});
export default filter;
