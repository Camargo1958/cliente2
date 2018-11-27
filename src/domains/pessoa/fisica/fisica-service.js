import Http from '@/support/services/http';

class FisicaService extends Http {
  save(payload) {
    return this.http.post('/fisica', payload);
  }

  edit(id, payload) {
    return this.http.put(`/fisica/${id}`, payload);
  }

  list() {
    return this.http.get('/fisica');
  }

  get(id) {
    return this.http.get(`/fisica/${id}`);
  }
}
const service = new FisicaService();
export default service;
