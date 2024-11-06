import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'

Vue.use(Router)

export default new Router({
    //登录页面
    routes:[{
       path:'/login',
       name:'Login',
       component:Login 
    }]
})