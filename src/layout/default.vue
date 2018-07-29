<template lang="pug">
  .layout
    Layout
      Header.header
        Menu(mode="horizontal",:theme="theme",active-name="1").menu
          .logo {{title}}
          .nav
            MenuItem(name="1") 菜单1
            MenuItem(name="2") 菜单2
            MenuItem(name="3") 菜单3
            MenuItem(name="4") 菜单4
          .action
            Dropdown(trigger="click",@on-click="handleDropDownClick")
              Avatar(icon="ios-person")
              DropdownMenu(slot="list")
                DropdownItem(name="logout") 登出
      Content.content
        router-view
      Footer.footer {{copyright}}
</template>

<script>
import { mapState } from "vuex";
import { clearToken } from "@/utils/jwt";

export default {
  data() {
    return {
      theme: "light"
    };
  },
  computed: {
    ...mapState(["title", "copyright"])
  },
  methods: {
    // 顶部下拉点击
    handleDropDownClick(name) {
      if (name === "logout") {
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
  }
};
</script>

<style lang="scss" scoped>
.layout {
  .header {
    padding: 0;
    background-color: #fff;
    .menu {
      padding: 0 50px;
    }
    .logo {
      width: 100px;
      font-size: 20px;
      font-weight: bold;
      float: left;
    }
    .action {
      float: right;
    }
  }
  .content {
    margin: 20px 50px;
    padding: 20px;
    background: #fff;
    min-height: 500px;
  }
  .footer {
    font-size: 12px;
    text-align: center;
  }
}
</style>
