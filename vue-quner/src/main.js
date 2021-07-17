// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { head } from 'shelljs'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import HH from './components/wuyu'
//import Users from './components/Users'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//配置路由
const router=new VueRouter({
  routes:[
    {path:"/",component:Home},//路由的嘀址
    {path:"/helloworld",component:HelloWorld},
    {path:"/JIUZHE",component:HH},
  ],
  mode:"history"
})
//Vue.component("users",Users);
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
