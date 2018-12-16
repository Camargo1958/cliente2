const filter = ((value) => {
  if (!value) return '';
  let cnpj = '';
  cnpj += value.substring(0, 3);
  cnpj += '.';
  cnpj += value.substring(3, 6);
  cnpj += '.';
  cnpj += value.substring(6, 9);
  cnpj += '-';
  cnpj += value.substring(9, value.length);
  return cnpj;
});
export default filter;
