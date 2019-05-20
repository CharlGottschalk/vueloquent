export default {
  setFinal(method, args) {
    this.setHeaders();
    this.query.final.method = method;
    this.query.final.args = args;
    return this;
  },
  all() {
    return this.setFinal('all', []).post();
  },
  avg() {
    return this.setFinal('avg', arguments).post();
  },
  count() {
    return this.setFinal('count', []).post();
  },
  delete() {
    return this.setFinal('delete', []).post();
  },
  decrement() {
    return this.setFinal('decrement', arguments).post();
  },
  doesntExist() {
    return this.setFinal('doesntExist', []).post();
  },
  exists() {
    return this.setFinal('exists', []).post();
  },
  first() {
    return this.setFinal('first', []).post();
  },
  find() {
    return this.setFinal('find', arguments).post();
  },
  get() {
    return this.setFinal('get', []).post();
  },
  truncate() {
    return this.setFinal('truncate', []).post();
  },
  insert() {
    return this.setFinal('insert', arguments).post();
  },
  insertGetId() {
    return this.setFinal('insertGetId', arguments).post();
  },
  increment() {
    return this.setFinal('increment', arguments).post();
  },
  inRandomOrder() {
    return this.setFinal('inRandomOrder', arguments).post();
  },
  latest() {
    return this.setFinal('latest', arguments).post();
  },
  lockedForUpdate() {
    return this.setFinal('lockedForUpdate', []).post();
  },
  max() {
    return this.setFinal('max', arguments).post();
  },
  min() {
    return this.setFinal('min', arguments).post();
  },
  oldest() {
    return this.setFinal('oldest', arguments).post();
  },
  pluck() {
    return this.setFinal('pluck', arguments).post();
  },
  sum() {
    return this.setFinal('sum', arguments).post();
  },
  sharedLock() {
    return this.setFinal('sharedLock', []).post();
  },
  update() {
    return this.setFinal('update', arguments).post();
  },
  updateOrInsert() {
    return this.setFinal('updateOrInsert', arguments).post();
  }
};
