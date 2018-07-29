<template lang="pug">
  .page
    .main
      Card.form
        p(slot="title") 登录
        Form(ref="form",:model="form",:rules="rules")
          FormItem(label="用户名",prop="username")
            Input(v-model="form.username")
          FormItem(label="密码",prop="password")
            Input(v-model="form.password",type="password",@on-enter="handleSubmit")
          FormItem
            Button(type="primary",@click="handleSubmit",long) 登录
    .bg
</template>

<script>
import { required } from "@/constants/rules";
// import { user } from "@/constants/api";
// import { setToken } from "@/utils/jwt";

export default {
  metaInfo: {
    title: "登录"
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [required("用户名")],
        password: [required("密码")]
      }
    };
  },
  methods: {
    // 提交
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.fetchValidate();
        }
      });
    },
    // 请求登录
    fetchValidate() {
      const { username: token, password } = this.form;
      const payload = {
        params: {
          password,
          token
        }
      };
      /* this.$createMsgHttpEx(user.validate, payload, "登录成功", data => {
        const { access_token, refresh_token } = data;
        // 保存token
        setToken(access_token, refresh_token);
        // 跳转至首页
        this.$router.push({ name: "home" });
      }); */
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  margin: 60px 0;
  .main {
    width: 400px;
    margin: 0 auto;
    padding: 60px 0;
    .form {
      padding: 0 15px;
    }
  }
  .bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("../../assets/login.svg") no-repeat;
    background-attachment: fixed;
    background-size: 100%;
    z-index: -1;
  }
}
</style>
