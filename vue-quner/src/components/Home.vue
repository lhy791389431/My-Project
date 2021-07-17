<!-- 模板 -->
<template>
  <div id="home">
   <app-header></app-header>
  
    <gg v-bind:jb="ww"></gg>
     <app-footer ></app-footer>
  </div>
</template>
<!--2.行为：处理逻辑 -->
<script>

import Users from './Users'
import Header from './Header'
import Footer from './Footer'
export default {
  name: "home",
  data() {
    return {
       ww:
     [
      ]
    };
  },
  components:{
   "gg": Users,
   "app-header":Header,
   "app-footer":Footer
  },
  created(){
      this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data)=>{
          this.ww=data.body;
      })
  }
};
</script>

<style>
h1{color :red}
</style>
