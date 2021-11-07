import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import register from "@/views/Profile.vue";

const routes = [
  { 
    name: 'login',
    path: '/login', 
    component: Login,
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