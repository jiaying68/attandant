import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Layout from '@/components/Layout'
import Mine from '@/components/Mine'
import Employee from '@/components/Employee'
import employeeManage from '@/components/employeeManage'
import Profile from '@/components/Profile'
import Diary from '@/components/Diary'
import Statistic from '@/components/Statistic'

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
            path: '/employeeManage',
            component: employeeManage
        },
        {
            path: '/Profile',
            component: Profile
        },
        {
            path: '/Diary',
            component: Diary
        },
        {
            path: '/Statistic',
            component: Statistic
        }
    ]
})