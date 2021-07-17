<!-- 模板 -->
<template>
  <div id="app">

    <ul>
      <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/hellowrld">hello</router-link></li>
          <li><router-link to="/JIUZHE">Good</router-link></li>

     
    </ul>
   <router-view></router-view>

  </div>
</template>
<!--2.行为：处理逻辑 -->
<script>

export default {
  name: "app",
  data() {
    return {
    };
  }
}
</script>

<style>
h1{color :red}
</style>
