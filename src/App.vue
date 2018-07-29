<template lang="pug">
  #app
    Blayout
</template>

<script>
import Blayout from "@/layout";
import store from "@/store";

export default {
  metaInfo: {
    // 标题模板
    titleTemplate: titleChunk => {
      const suffix = store.state.title;
      // 如果没有设置标题，则不显示破折号
      return titleChunk ? `${titleChunk} - ${suffix}` : suffix;
    }
  },
  components: {
    Blayout
  }
};
</script>

<style lang="scss">
body {
  background: #f8f8f9;
}
</style>

 