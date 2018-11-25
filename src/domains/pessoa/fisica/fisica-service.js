import Http from '@/support/services/http';

class FisicaService extends Http {
  save(payload) {
    return this.http.post('/fisica', payload);
  }

  get() {
    return this.http.get('/fisica');
  }
}
const service = new FisicaService();
export default service;
