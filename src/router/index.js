import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Docs from '../pages/Docs.vue';
import Demo from '../pages/Demo.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/docs', name: 'Docs', component: Docs },
  { path: '/demo', name: 'Demo', component: Demo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 