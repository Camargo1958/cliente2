const filter = ((value) => {
  if (!value) return '';
  let cnpj = '';
  cnpj += value.substring(0, 2);
  cnpj += '.';
  cnpj += value.substring(2, 5);
  cnpj += '.';
  cnpj += value.substring(5, 8);
  cnpj += '/';
  cnpj += value.substring(8, 12);
  cnpj += '-';
  cnpj += value.substring(12, value.length);
  return cnpj;
});
export default filter;
