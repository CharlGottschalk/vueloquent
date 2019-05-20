export default {
  addQuery(method, args) {
    this.query.queries.push({
      method: method,
      args: args
    });
    return this;
  },
  crossJoin() {
    return this.addQuery('crossJoin', arguments);
  },
  groupBy() {
    return this.addQuery('groupBy', arguments);
  },
  having() {
    return this.addQuery('having', arguments);
  },
  havingRaw() {
    return this.addQuery('havingRaw', arguments);
  },
  inRandomOrder() {
    return this.addQuery('inRandomOrder', arguments);
  },
  join() {
    return this.addQuery('join', arguments);
  },
  limit() {
    return this.addQuery('limit', arguments);
  },
  latest() {
    return this.addQuery('latest', arguments);
  },
  leftJoin() {
    return this.addQuery('leftJoin', arguments);
  },
  offset() {
    return this.addQuery('offset', arguments);
  },
  orderBy() {
    return this.addQuery('orderBy', arguments);
  },
  oldest() {
    return this.addQuery('oldest', arguments);
  },
  orWhere() {
    return this.addQuery('orWhere', arguments);
  },
  orWhereRaw() {
    return this.addQuery('orWhereRaw', arguments);
  },
  orHavingRaw() {
    return this.addQuery('orHavingRaw', arguments);
  },
  rightJoin() {
    return this.addQuery('rightJoin', arguments);
  },
  select() {
    return this.addQuery('select', arguments);
  },
  skip() {
    return this.addQuery('skip', arguments);
  },
  take() {
    return this.addQuery('take', arguments);
  },
  union() {
    return this.addQuery('union', arguments);
  },
  with() {
    return this.addQuery('with', arguments);
  },
  where() {
    return this.addQuery('where', arguments);
  },
  whereRaw() {
    return this.addQuery('whereRaw', arguments);
  },
  whereBetween() {
    return this.addQuery('whereBetween', arguments);
  },
  whereNotBetween() {
    return this.addQuery('whereNotBetween', arguments);
  },
  whereIn() {
    return this.addQuery('whereIn', arguments);
  },
  whereNotIn() {
    return this.addQuery('whereNotIn', arguments);
  },
  whereNull() {
    return this.addQuery('whereNull', arguments);
  },
  whereNotNull() {
    return this.addQuery('whereNotNull', arguments);
  },
  whereDate() {
    return this.addQuery('whereDate', arguments);
  },
  whereMonth() {
    return this.addQuery('whereMonth', arguments);
  },
  whereDay() {
    return this.addQuery('whereDay', arguments);
  },
  whereYear() {
    return this.addQuery('whereYear', arguments);
  },
  whereTime() {
    return this.addQuery('whereTime', arguments);
  },
  whereColumn() {
    return this.addQuery('whereColumn', arguments);
  },
  whereJsonContains() {
    return this.addQuery('whereJsonContains', arguments);
  },
  whereJsonLength() {
    return this.addQuery('whereJsonLength', arguments);
  }
};
