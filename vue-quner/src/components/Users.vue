<template>
  <div class="users">
    <h1>hello-vue</h1>
   <ul>
    
       <li  v-for="user in jb" >
         <h2>{{user.name}}</h2>
         <h3 >{{user.email}}</h3>

       </li>
   </ul>
   
  </div>
</template>

<script>
export default {
  name: 'users',
  props:["jb"],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1{color :green}

.users{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding:0 20px;
  box-sizing: border-box;
}
ul{
  flex-wrap: wrap;
  display: flex;
  list-style-type: none;
  padding:0;
}
li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  text-align: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
