<template lang="pug">
  #app Bravo!
</template>

<script>
export default {
  async mounted() {
    const { data } = await this.$http.get(
      "http://jsonplaceholder.typicode.com/posts",
      ""
    );
    console.log(data);
  }
};
</script>
