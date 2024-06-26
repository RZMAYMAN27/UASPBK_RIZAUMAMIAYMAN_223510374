import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'quasar/dist/quasar.css';
import { Quasar } from 'quasar';

createApp(App)
  .use(router)
  .use(Quasar, { plugins: {} })
  .mount('#app');
