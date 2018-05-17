<template lang="pug">
  .layout
    Layout
      Header.layout-header
        .logo.fl {{company}}·企业ERP管理系统
        .action.fr
          Dropdown(trigger="click",@on-click="handleDropDownClick")
            Button(type="text",size="large").greeting
              span 你好: {{info.username}} 
              Icon(type="arrow-down-b")
            DropdownMenu(slot="list")
              DropdownItem(name="logout") 登出
      Layout
        Sider(hide-trigger).layout-sider
          Menu(theme="light",width="auto",:active-name="activeMenu",:open-names="openedMenus",@on-select="handleMenuSelect")
            template(v-for="(item,index) in menus")
              Submenu(v-if="item.hasChild",:name="item.name",:key="index")
                template(slot="title") {{item.title}}
                MenuItem(v-for="child in item.children",:key="child.name",:name="child.name") {{child.title}}
              MenuItem(v-else,:name="item.name",:key="index") {{item.title}}
        Layout.layout-main
          Breadcrumb.layout-breadcrumb
            BreadcrumbItem(v-for="(item,index) in breadcrumbs",:key="index") {{item}}
          Content.layout-content
            router-view
          Footer.layout-footer {{copyright}}
</template>

<script>
import { mapState } from "vuex";
import { user } from "@/constants/api";
import { clearToken } from "@/utils/jwt";

export default {
  data() {
    return {
      // 侧边栏菜单
      menus: [
        {
          hasChild: false,
          name: "home",
          title: "首页"
        },
        {
          hasChild: true,
          name: "test",
          title: "测试",
          children: [
            {
              name: "test-account",
              title: "账号管理"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState(["company", "copyright"]),
    ...mapState("user", ["info"]),
    // 当前路由
    activeRoute() {
      return this.$route;
    },
    // 当前菜单
    activeMenu() {
      return this.activeRoute.name;
    },
    // 展开的菜单
    openedMenus() {
      const group = this.activeMenu.split("-")[0];
      return [group];
    },
    // 面包屑
    breadcrumbs() {
      const temp = [];
      const openedMenuName = this.openedMenus[0];
      const openedMenuTitle = this.activeRoute.meta.title;
      // 判断一级二级
      if (openedMenuName == this.activeMenu) {
        temp.push(openedMenuTitle);
      } else {
        this.menus.forEach(item => {
          if (item.name == openedMenuName) {
            temp.push(item.title);
          }
        });
        temp.push(openedMenuTitle);
      }
      return temp;
    }
  },
  methods: {
    // 获取登录用户信息
    featchUserInfo() {
      const id = this.$storage("USER");
      const payload = {
        id
      };
      this.$createHttpEx(user.getByUuid, payload, data => {
        // 存入全局
        this.$store.commit("user/setUser", data);
      });
    },
    // 侧边菜单点击
    handleMenuSelect(name) {
      this.$router.push({ name });
    },
    // 顶部下拉点击
    handleDropDownClick(name) {
      if (name == "logout") {
        this.logout();
      } else {
        this.$router.push(name);
      }
    },
    // 登出
    logout() {
      clearToken();
      this.$router.replace({
        name: "login"
      });
    }
  },
  mounted() {
    // 获取用户信息
    this.featchUserInfo();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_color";
.layout {
  position: relative;
  overflow: hidden;
}
.layout-header {
  background-color: $primary-color;
  color: #fff;
  .logo {
    font-size: 18px;
    font-weight: bold;
  }
  .greeting {
    color: #fff;
  }
}
.layout-sider {
  background-color: #fff;
}
.layout-main {
  padding: 0 20px;
}
.layout-breadcrumb {
  margin: 20px 0;
}
.layout-content {
  padding: 20px;
  min-height: 500px;
  background-color: #fff;
}
.layout-footer {
  text-align: center;
  font-size: 12px;
}
</style>
