import axios from 'axios';
import core from './_core';
import final from './_final';
import query from './_query';

const ready = {
  ready(fn) {
    if (
      document.attachEvent
        ? document.readyState === 'complete'
        : document.readyState !== 'loading'
    ) {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
};

const Vueloquent = { ...ready, ...core, ...query, ...final };

export default Vueloquent;

if (typeof window !== 'undefined') {
  window.axios = axios;
  window.$v = Vueloquent;
}
