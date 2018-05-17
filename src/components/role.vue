<template lang="pug">
  div(v-if="hasRight")
    slot
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "b-role",
  props: {
    role: {
      type: String,
      default: "isAdmin"
    }
  },
  computed: {
    ...mapGetters("user", ["isAdmin"]),
    hasRight() {
      return this[this.role];
    }
  }
};
</script>

