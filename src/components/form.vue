<template lang="pug">
  Row
    Col(span="12")
      Form(ref="form",:model="model",:rules="rules",label-position="right",:label-width="100")
        slot
        FormItem.btn-content
          Button(type="primary",@click="handleSubmit") 提交
          Button(type="text",@click="handleCancel") 取消
</template>

<script>
export default {
  name: "b-form",
  props: {
    // 表单对象
    model: {
      type: Object,
      default: () => {}
    },
    // 验证规则
    rules: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    // 校验表单
    handleSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.$emit("on-submit", event);
        }
      });
    },
    // 取消，返回详情
    handleCancel() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-content {
  margin-top: 24px;
}
</style>
