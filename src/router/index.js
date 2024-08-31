import { createRouter, createWebHistory } from 'vue-router';
import GreetingView from '../views/GreetingView.vue';
import AuthView from '../views/AuthView.vue';
import HomepageView from '../views/HomepageView.vue';

const routes = [
  {
    path: '/',
    component: GreetingView,
  },
  {
    path: '/map',
    component: HomepageView,
  },
  {
    path: '/auth',
    component: AuthView,
  },
];

export const router = createRouter({
  history: createWebHistory('/map-traveler/'),
  routes,
});
