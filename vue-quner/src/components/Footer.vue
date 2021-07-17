<template>
  <footer>
      <p>
          {{copyright}}
      </p>
  </footer>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
     copyright:"good afternoon!"
    }
  }
}
</script>

<style scoped>
footer{background: #222;
padding: 6px;}
p{color:limegreen;
text-align: center;}
</style>
