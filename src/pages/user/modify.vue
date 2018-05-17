<template lang="pug">
  .page
    BForm(:model="form",:rules="rules",@on-submit="fetchModify")
      FormItem(label="用户名",prop="username")
        Input(v-model="form.username",placeholder="请输入")
</template>

<script>
import { user } from "@/constants/api";
import { required } from "@/constants/rules";

export default {
  metaInfo: {
    title: "修改"
  },
  data() {
    return {
      uuid: this.$route.params.uuid,
      form: {
        username: ""
      },
      rules: {
        username: [required("用户名")]
      }
    };
  },
  methods: {
    // 获取详情
    fetchDetail() {
      const payload = {
        id: this.uuid
      };
      this.$createHttpEx(user.getByUuid, payload, data => {
        this.form = data;
      });
    },
    // 提交表单
    fetchModify() {
      const payload = {
        id: this.uuid,
        params: this.form
      };
      this.$createMsgHttpEx(user.modify, payload, "修改成功", () => {
        // 跳转到详情页
        this.$router.push(`../${this.uuid}`);
      });
    }
  },
  mounted() {
    this.fetchDetail();
  }
};
</script>
