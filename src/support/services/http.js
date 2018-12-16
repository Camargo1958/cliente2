import axios from 'axios';

export default class Http {
  constructor() {
    this.http = axios.create({
      // baseURL: 'http://5bef63815b9d1a00132445af.mockapi.io/trainamento/v1',
      baseURL: 'http://5c042fb6d5f2070013d580bd.mockapi.io/api/v1',
    });
  }
}
