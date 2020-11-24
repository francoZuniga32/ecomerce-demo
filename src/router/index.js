import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Producto from '../views/Producto.vue';
import Productos from '../views/Productos.vue'
import Servicios from '../views/Servicios.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/producto/:id',
    name: 'produto',
    component: Producto
  },
  {
    path: '/servicios',
    name: 'servicos',
    component: Servicios
  }
]

const router = new VueRouter({
  routes
})

export default router
