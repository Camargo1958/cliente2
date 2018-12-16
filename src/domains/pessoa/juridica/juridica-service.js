import Http from '@/support/services/http';

class JuridicaService extends Http {
  save(payload) {
    return this.http.post('/empresa', payload);
  }

  edit(id, payload) {
    return this.http.put(`/empresa/${id}`, payload);
  }

  list() {
    return this.http.get('/empresa');
  }

  get(id) {
    return this.http.get(`/empresa/${id}`);
  }
}
const service = new JuridicaService();
export default service;
