import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'


Vue.use(Router)

export default new Router({
    //登录页面
    routers:[{
       path:'/login',
       name:'Login',
       component:Login 
    }]
})