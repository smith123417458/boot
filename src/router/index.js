import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '*',
  redirect: '/',
},
{
  path: '/',
  component: Home,
  children: [{
    path: '',
    component: () => import('@/views/LandingPage.vue'),
  },
  {
    path: 'product',
    component: () => import('@/components/Product.vue'),
  },
  {
    path: 'product/:productId',
    component: () => import('@/components/ProductItem.vue'),
  },
  {
    path: "signin",
    component: () => import('@/components/Login.vue'),
  },
  



,
 



  
  
  ],
},


];

const router = new VueRouter({
  routes,
  
});

export default router;
