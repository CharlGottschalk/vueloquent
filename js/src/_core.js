export default {
  config: {
    endpoint: '/vueloquent',
    headers: []
  },
  query: {
    model: '',
    queries: [],
    final: {
      method: 'get',
      args: []
    }
  },
  at(endpoint) {
    this.config.endpoint = endpoint;
    return this;
  },
  clear() {
    this.query.model = '';
    this.query.queries = [];
    this.query.final = {
      method: 'get',
      args: []
    };
  },
  configure(config) {
    this.config = config;
  },
  csrf(token) {
    this.config.headers.push({ name: 'X-CSRF-TOKEN', value: token });
    return this;
  },
  from(model) {
    this.query.model = model;
    return this;
  },
  headers(headers) {
    this.config.headers = headers;
    return this;
  },
  post() {
    const query = Object.assign({}, this.query);
    this.clear();
    return axios.post(this.config.endpoint, query);
  },
  setHeaders() {
    for (let i = 0; i < this.config.headers.length; i++) {
      axios.defaults.headers.common[
        this.config.headers[i].name
      ] = this.config.headers[i].value;
    }
  },
  token(token) {
    this.config.headers.push({
      name: 'Authorization',
      value: `Bearer ${token}`
    });
    return this;
  },
  params(params) {
    this.query = { ...this.query, ...params };
    return this;
  }
};
