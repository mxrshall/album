import { createRouter, createWebHashHistory } from "vue-router";

import Homepage from './Homepage.vue';

const routes = [
  { path: '/', name: 'Homepage', component: Homepage },
  { 
    path: '/event/:id',
    name: 'event',
    component: () => import('./Event.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
