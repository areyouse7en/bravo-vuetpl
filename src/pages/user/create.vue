<template lang="pug">
  .page
    BForm(:model="form",:rules="rules",@on-submit="fetchCreate")
      FormItem(label="用户名",prop="name")
        Input(v-model="form.name",placeholder="请输入")
</template>

<script>
import { user } from "@/constants/api";
import { required } from "@/constants/rules";

export default {
  metaInfo: {
    title: "新增"
  },
  data() {
    return {
      form: {
        name: ""
      },
      rules: {
        name: [required("用户名")]
      }
    };
  },
  methods: {
    // 提交表单
    fetchCreate() {
      const payload = { params: this.form };
      this.$createMsgHttpEx(user.create, payload, "新增成功", uuid => {
        // 跳转到详情页
        this.$router.push(`./${uuid}`);
      });
    }
  }
};
</script>
