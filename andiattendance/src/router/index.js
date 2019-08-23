import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Layout from '@/components/Layout'
import Mine from '@/components/Mine'
import Employee from '@/components/Employee'
import setAuth from '@/components/setAuth'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Layout',
            name: 'Layout',
            component: Layout
        },
        {
            path: '/Mine',
            name: 'Mine',
            component: Mine
        },
        {
            path: '/Employee',
            name: 'Employee',
            component: Employee
        },
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/setAuth',
            component: setAuth
        }
    ]
})