import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import productApp from '../views/product-app.vue'
import productDetails from '../views/product-details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/product',
    name: 'productApp',
    component: productApp
  },
  {
    path: '/product/:productId',
    component: productDetails
},
]

const router = new VueRouter({
  routes
})

export default router
