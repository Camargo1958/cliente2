export default class FisicaModel {
  constructor(
    model = {
      id: '',
      nome: '',
      sobrenome: '',
      cpf: '',
      dataNascimento: '',
      email: '',
    },
  ) {
    this.id = model.id;
    this.nome = model.nome;
    this.sobrenome = model.sobrenome;
    this.cpf = model.cpf;
    this.dataNascimento = model.dataNascimento;
    this.email = model.email;
  }
}
