const filter = ((value) => {
  if (!value) return '';
  const date = new Date(Date.parse(value));
  return date.toLocaleDateString();
});
export default filter;
