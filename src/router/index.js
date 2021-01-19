import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: '首頁',
    }
  },
  {
    path: '/contacts',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue'),
    meta: {
      breadcrumb: '聯絡我們'
    }
  },
  {
    path: '/room',
    name: 'room',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Room.vue'),
    meta: {
      breadcrumb: "房型"
    },
    children: [
      {
        path: 'main',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/roommain.vue'),
        meta: {
          breadcrumb: "房間分類"
        },
      },
      {
        path: 'room1',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room1.vue'),
        meta: {
          breadcrumb: "標準二人房"
        }
      },
      {
        path: 'room2',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room2.vue'),
        meta: {
          breadcrumb: "豪華二人房(king)"
        }
      },
      {
        path: 'room3',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room3.vue'),
        meta: {
          breadcrumb: "四人房"
        }
      },
      {
        path: 'room4',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room4.vue'),
        meta: {
          breadcrumb: "六人房"
        }
      },
      {
        path: 'room5',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room5.vue'),
        meta: {
          breadcrumb: "家庭房"
        }
      },
      {
        path: 'room6',
        component: () => import(/* webpackChunkName: "about" */ '../components/room/room6.vue'),
        meta: {
          breadcrumb: "行政雙人房"
        }
      }
    ]
  },
  {
    path: '/members',
    component: () => import(/* webpackChunkName: "about" */ '../views/Member.vue'),
    meta: {
      breadcrumb: "會員"
    },
    children: [
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../components/member/login.vue'),
        meta: {
          breadcrumb: "會員登入"
        }
      },
      {
        path: 'register',
        component: () => import(/* webpackChunkName: "about" */ '../components/member/register.vue'),
        meta: {
          breadcrumb: "會員註冊"
        }
      },
      {
        path: 'forget',
        component: () => import(/* webpackChunkName: "about" */ '../components/member/forget.vue'),
        meta: {
          breadcrumb: "忘記密碼"
        }
      }
    ]
  },
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  const page = ['/members/login', '/contacts'];
  const authRequird = !page.includes(to.path);
  const loggedIn = JSON.parse(localStorage.getItem('accesstoken'));

  if (authRequird && !loggedIn) {
    next('/members/login');
  } else {
    next();
  }

});