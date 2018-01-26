import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/common/HelloWorld'
import Index from '@/components/page/Index'
import Detail from '@/components/page/Detail'
import ColdDishes from '@/components/common/ColdDishes'
import HotDishes from '@/components/common/HotDishes'
import Cart from '@/components/page/Cart'
import Register from '@/components/page/Register'
import Login from '@/components/page/Login'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {path: '/',component: ColdDishes},
        {path: 'cold',component: ColdDishes},
        {path: 'hot',component: HotDishes}
      ],
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})
