<template lang="pug">
  div
    template(v-if="isDefault")
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
    },
    isDefault() {
      return this.layout === "default";
    }
  },
  components: {
    DefaultLayout
  }
};
</script>
