import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import register from "@/views/Profile.vue";
import test from "@/views/test.vue";
const routes = [
  { 
    name: 'login',
    path: '/login', 
    component: Login,
  },
  { 
    name: 'test',
    path: '/', 
    component: test,
  },
  { 
    name: 'register',
    path: '/register', 
    component: register, 
    props:true 
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;