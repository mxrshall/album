import { createRouter, createWebHashHistory } from "vue-router";

import Homepage from './Homepage.vue';
import Event from './Event.vue';

const routes = [
  { path: '/', name: 'Homepage', component: Homepage },
  { 
    path: '/event/:id',
    name: 'event',
    component: Event,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
