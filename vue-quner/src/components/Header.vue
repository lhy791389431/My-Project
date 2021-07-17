<template>
  <header>
    <h1>
      {{ title }}
     
    </h1>
  </header>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      title: "good morning!",
    };
  },
};
</script>

<style scoped>
header {
  background: lightpink;
  padding: 10px;
}
h1 {
  color: lightseagreen;
}
</style>
