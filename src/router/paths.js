
import {
  Main, Login, Profile
} from '@/views'


export default [
  {
    name:'/login',
    path: '/login',
    component: Login
  },
  {
    name:'profile',
    path: '/profile',
    component: Profile
  },
  {
    name:'main',
    path: '/',
    component: Main
  },
  

]