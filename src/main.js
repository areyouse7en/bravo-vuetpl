import Vue from "vue";
import router from "./router/";
import store from "./store/";
import "./plugin/";
import "./components/";
import "./directives/";

import App from "./App.vue";
import "./assets/app.scss";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});