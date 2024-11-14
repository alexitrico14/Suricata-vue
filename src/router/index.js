import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosView.vue'),
    props: () => {
      return{
        rutaImagen: './img/empanadas.jpg',
        titulo: 'Empanadas',
        descripcion: 'Saborea nuestras empanadas crujientes y rellenas con los mejores ingredientes caseros.',
        precio: '$2000',
        promocion: 'Lleva tres y paga dos.'
      }
    } 
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
