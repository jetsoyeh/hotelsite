import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/room',
    name: 'room',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Room.vue'),
    children:[
      {
        path:'main',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/roommain.vue'),
      },
      {
        path:'room1',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room1.vue'),
      },
      {
        path:'room2',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room2.vue'),
      },
      {
        path:'room3',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room3.vue'),
      },
      {
        path:'room4',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room4.vue'),
      },
      {
        path:'room5',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room5.vue'),
      },
      {
        path:'room6',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room6.vue'),
      }
    ]
  },
  {
    path:'*',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
