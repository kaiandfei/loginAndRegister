import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const Home = () => import('@/views/Home.vue')
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: "/home" },
    { path: '/home', component: Home, },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  ]
});
export default router