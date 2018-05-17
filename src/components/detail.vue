<template lang="pug">
  Row
    Col(span="12")
      Form(label-position="right",:label-width="100")
        slot
    Col(span="12")
      BRole
        ButtonGroup(vertical)
          slot(name="btns")
      Button(type="ghost",icon="android-arrow-back",@click="goBack",v-if="backUrl").btn 返回列表
</template>

<script>
export default {
  name: "b-detail",
  props: {
    // 返回列表路径
    backUrl: {
      type: String
    }
  },
  methods: {
    // 返回列表
    goBack() {
      this.$router.push(this.backUrl);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 10px;
}
</style>


