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
        Layout.layout-main
</template>

<script>
import { mapState } from "vuex";
import { user } from "@/constants/api";
import { clearToken } from "@/utils/jwt";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["info"])
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
.layout {
  position: relative;
  overflow: hidden;
}
.layout-header {
  color: #fff;
  .logo {
    font-size: 18px;
    font-weight: bold;
  }
  .greeting {
    color: #fff;
  }
}
</style>
