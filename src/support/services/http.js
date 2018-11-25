import axios from 'axios';

export default class Http {
  constructor() {
    this.http = axios.create({
      baseURL: 'http://5bef63815b9d1a00132445af.mockapi.io/trainamento/v1',
    });
  }
}
