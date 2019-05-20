import core from './_core';
import final from './_final';
import query from './_query';

const eloquent = { ...core, ...query, ...final };

const Vueloquent = {
  install(Vue) {
    Vue.eloquent = eloquent;
  }
};

export default Vueloquent;

if (typeof window !== 'undefined' && Vue) {
  Vue.use(Vueloquent);
}
