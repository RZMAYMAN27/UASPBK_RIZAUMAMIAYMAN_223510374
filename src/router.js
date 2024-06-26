import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import TugasPertemuan1 from './components/TugasPertemuan1.vue';
import TugasPertemuan2 from './components/TugasPertemuan2.vue';
import TugasPertemuan3 from './components/TugasPertemuan3.vue';
import TugasPertemuan4 from './components/TugasPertemuan4.vue';
import TugasPertemuan5 from './components/TugasPertemuan5.vue';
import TugasPertemuan6 from './components/TugasPertemuan6.vue';
import TugasPertemuan7 from './components/TugasPertemuan7.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/task/1', component: TugasPertemuan1 },
  { path: '/task/2', component: TugasPertemuan2 },
  { path: '/task/3', component: TugasPertemuan3 },
  { path: '/task/4', component: TugasPertemuan4 },
  { path: '/task/5', component: TugasPertemuan5 },
  { path: '/task/6', component: TugasPertemuan6 },
  { path: '/task/7', component: TugasPertemuan7 }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
