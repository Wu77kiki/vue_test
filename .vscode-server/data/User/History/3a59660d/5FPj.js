import Vue from "vue"
import Router from 'vue-router'
import Login from './views/Login'
import { component } from "vue/types/umd"

Vue.use(Router)

export default new Router({
    routers:[{
       path:'/Login',
       name:'Login',
       component 
    }]
})