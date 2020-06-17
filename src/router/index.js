import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Secure from '../views/Secure.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/secure',
    name: 'Secure',
    component: Secure,
    beforeEnter: ((to, from, next) => {

      console.log(to);
      console.log(from);
      console.log('alors 1 ?');
      console.log(router.app.$root.connect);

      console.log('alors 2 ?');
      if (!router.app.$root.connect) {
        next({name: 'Login'})
        //next('/login')
      } else {next()}
    
    })

  }
]

const router = new VueRouter({
  routes,
})

// router.beforeEach ((to, from, next) => {

//   if ((to === 'secure') && (!router.app.$root.connect)) {
//     next("login")
//   } else {next()}

// })

export default router
