<template lang="pug">
  .page
    Row(type="flex",align="middle")
      Col(span="12")
        img(src="../../assets/404.png")
      Col(span="8",offset="4")
        h1 404
        p 抱歉，您访问的页面不存在
        Button(type="primary",size="large",@click="goHome") 返回首页
</template>

<script>
export default {
  metaInfo: {
    title: "页面不存在"
  },
  methods: {
    goHome() {
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  margin: 60px auto;
  padding: 60px 0;
  width: 1000px;
  img {
    max-width: 100%;
  }
  h1 {
    font-size: 80px;
  }
  p {
    font-size: 20px;
    margin: 15px 0;
  }
}
</style>
