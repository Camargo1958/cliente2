export default class JuridicaModel {
  constructor(
    model = {
      id: '',
      nomeFantasia: '',
      razaoSocial: '',
      cnpj: '',
      dataFundacao: '',
      emailContato: '',
    },
  ) {
    this.id = model.id;
    this.nomeFantasia = model.nomeFantasia;
    this.razaoSocial = model.razaoSocial;
    this.cnpj = model.cnpj;
    this.dataFundacao = model.dataFundacao;
    this.emailContato = model.emailContato;
  }
}
