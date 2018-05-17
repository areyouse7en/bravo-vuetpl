import Vue from "vue";
import Vuex from "vuex";
import stores from "./stores";
Vue.use(Vuex);

const config = {
  strict: process.env.NODE_ENV !== "production",
  ...stores
};

const store = new Vuex.Store(config);

export default store;