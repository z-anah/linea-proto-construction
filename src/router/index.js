import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ConstructionApp from '../views/ConstructionApp.vue';
import LindyLikeApp from '../views/lindy-like/LindyLikeApp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/construction-app',
    name: 'ConstructionApp',
    component: ConstructionApp,
  },
  {
    path: '/lindy-like-app',
    name: 'LindyLikeApp',
    component: LindyLikeApp,
  }
];

const router = createRouter({
  history: createWebHistory('/linea-proto-construction/'),
  routes,
});

export default router;
