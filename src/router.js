import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
//import Landing from './components/Landing.vue'
import Success from './components/Success.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Register },
        { path: '/login', component: Login },
        { path: '/dashboard', component: Success },
    ]
})