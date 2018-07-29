import Vue from "vue";
import Meta from "vue-meta";
import VueRouter from "vue-router";

Vue.use(Meta);
Vue.use(VueRouter);

// 路由配置
import routes from "./routes";
const config = {
  mode: "history",
  routes
};
const router = new VueRouter(config);

// 路由守卫
/* import guard from "./guard";
router.beforeEach(guard.before);
router.afterEach(guard.after); */

export default router;