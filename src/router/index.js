import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/common/HelloWorld'
import Index from '@/components/page/Index'
import Detail from '@/components/page/Detail'
import ColdDishes from '@/components/common/ColdDishes'
import HotDishes from '@/components/common/HotDishes'
import Describe from '@/components/common/Describe'
import Comment from '@/components/common/Comment'
import Address from '@/components/common/Address'
import Order from '@/components/common/Order'
import ManageAddress from '@/components/common/ManageAddress'
import CheckDish from '@/components/common/CheckDish'
import AddDish from '@/components/common/AddDish'
import Drinks from '@/components/common/Drinks'
import Seafood from '@/components/common/Seafood'
import StapleFood from '@/components/common/StapleFood'
import ManageUser from '@/components/common/ManageUser'
import OrderHistory from '@/components/common/OrderHistory'
import ManageOrderDetail from '@/components/common/Detail'
import Cart from '@/components/page/Cart'
import Register from '@/components/page/Register'
import Login from '@/components/page/Login'
import Manage from '@/components/page/Manage'
import Personal from '@/components/page/Personal'
import OrderDetail from '@/components/page/OrderDetail'
import AddComment from '@/components/page/AddComment'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: Index,
      children: [
        {path: '/',component: ColdDishes},
        {path: 'cold',component: ColdDishes},
        {path: 'hot',component: HotDishes},
        {path: 'drinks',component: Drinks},
        {path: 'staple',component: StapleFood},
        {path: 'seafood',component: Seafood},
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {path: '/',component: ColdDishes},
        {path: 'cold',component: ColdDishes},
        {path: 'hot',component: HotDishes},
        {path: 'drinks',component: Drinks},
        {path: 'staple',component: StapleFood},
        {path: 'seafood',component: Seafood},
      ],
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      children: [
        {path: '/',component: Describe },
        {path: 'comment', component: Comment}
      ]
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
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage,
      children: [
        { path:'/', component: CheckDish },
        { path:'check', component: CheckDish },
        { path:'add', component: AddDish },
        { path:'user', component: ManageUser },
        { path:'order', component: OrderHistory},
        {path:'detail', component : ManageOrderDetail}
      ]
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
      children: [
        { path:'/', component: Order },
        { path:'order', component: Order },
        { path:'address', component: Address },
        { path:'manage', component: ManageAddress }
      ]
    },
    {
      path: '/order/detail',
      component: OrderDetail
    },
    {
      path: '/comment',
      component: AddComment
    }

  ]
})
