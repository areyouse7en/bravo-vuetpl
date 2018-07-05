// 所有页面
import Login from "@/pages/login";
import Error404 from "@/pages/error/404";
import Home from "@/pages/home";

const mainRoutes = [{
  // 首页
  name: "home",
  path: "/",
  component: Home
}]

mainRoutes.forEach(item => {
  item.meta = {
    // 使用默认模板，需要登录，标题取页面内meta里的title
    layout: "default",
    needLogin: true,
    title: item.component.metaInfo.title
  }
})

const otherRoutes = [{
    // 登录页
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      layout: null,
      needLogin: false
    }
  },
  {
    // 404页
    name: "404",
    path: "/404",
    component: Error404,
    meta: {
      layout: null,
      needLogin: false
    }
  }
];

otherRoutes.forEach(item => {
  item.meta = {
    layout: null,
    needLogin: false
  }
})

const routes = mainRoutes.concat(otherRoutes)

export default routes;