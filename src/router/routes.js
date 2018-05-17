// 所有页面
import Login from "@/pages/login";
import Error404 from "@/pages/error/404";
import Home from "@/pages/home";
import User from "@/pages/user";
import UserCreate from "@/pages/user/create";
import UserDetail from "@/pages/user/detail";
import UserModify from "@/pages/user/modify";

const mainRoutes = [{
  // 首页
  name: "home",
  path: "/",
  component: Home
}, {
  // 列表
  name: "user-index",
  path: "/user",
  component: User
}, {
  // 内部管理-用户新增
  name: "user-create",
  path: "/user/create",
  component: UserCreate
}, {
  // 内部管理-用户详情
  name: "user-detail",
  path: "/user/:uuid",
  component: UserDetail
}, {
  // 内部管理-用户修改
  name: "user-modify",
  path: "/user/modify/:uuid",
  component: UserModify
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