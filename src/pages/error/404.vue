<template lang="pug">
  .page
</template>

<script>
export default {
  metaInfo: {
    title: "404"
  },
  mounted() {
    this.$Message.info({
      content: "3秒后为您跳转回首页",
      duration: 3,
      onClose: () => {
        this.$router.replace("/");
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("../../assets/404.png") no-repeat center center;
  background-size: 30%;
}
</style>
