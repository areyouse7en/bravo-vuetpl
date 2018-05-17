<template lang="pug">
  .search-bar
    Form(ref="form",:model="model",inline)
      slot
      FormItem.btn-item
        Button(type="primary",icon="ios-search",@click="handleSearch") 查询
        Button(type="text",@click="handleClear") 清空条件
</template>

<script>
export default {
  name: "b-search-bar",
  props: {
    // 表单对象
    model: {
      type: Object,
      default: () => {}
    },
    // 查询方法
    onSearch: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    // 执行查询
    handleSearch() {
      this.$emit("on-search", 1);
    },
    // 清空条件
    handleClear() {
      this.$refs["form"].resetFields();
      this.handleSearch();
    }
  }
};
</script>

<style lang="scss">
.search-bar {
  .ivu-form-item {
    width: 165px;
  }
  .btn-item {
    width: auto;
  }
}
</style>
