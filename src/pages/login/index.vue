<template lang="pug">
  .page
    .title {{company}}·企业ERP管理系统
    .form
      Form(ref="form",:model="form",:rules="rules",:label-width="80")
        FormItem(label="用户名",prop="username",@on-keydown.enter="handleSubmit")
          Input(v-model="form.username")
        FormItem(label="密码",prop="password")
          Input(v-model="form.password",type="password",@on-keydown.enter="handleSubmit")
        Row(type="flex",justify="center")
          Button(type="primary",@click="handleSubmit") 登录
    .footer {{copyright}}
</template>

<script>
import { mapState } from "vuex";
import { required } from "@/constants/rules";
import { user } from "@/constants/api";
import { setToken } from "@/utils/jwt";

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
  computed: {
    ...mapState(["company", "copyright"])
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
    // 登录
    fetchValidate() {
      const { username, password } = this.form;
      const payload = {
        params: {
          password,
          token: username
        }
      };
      this.$createMsgHttpEx(user.validate, payload, "登陆成功", data => {
        const { access_token, refresh_token } = data;
        // 保存token
        setToken(access_token, refresh_token);
        // 跳转至首页（ 后期修改为她跳转至原访问地址）
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-size: cover;
  padding-top: 250px;
  color: #000;
}
.title {
  text-align: center;
  font-size: 38px;
}
.form {
  width: 400px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 100px;
  position: relative;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 20px;
}
@media screen and (max-width: 640px) {
  .page {
    padding-top: 200px;
    background-position: top center;
    background-attachment: fixed;
    background-size: auto 740px;
  }
  .title {
    font-size: 18px;
  }
  .form {
    width: 90%;
    padding-bottom: 0;
    margin-bottom: 100px;
  }
  .footer {
    position: relative;
  }
}
</style>
