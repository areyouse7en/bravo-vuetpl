<template lang="pug">
  div
    template(v-if="layout=='default'")
      DefaultLayout
    template(v-else)
      router-view
</template>

<script>
import DefaultLayout from "./default";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    }
  },
  components: {
    DefaultLayout
  }
};
</script>
