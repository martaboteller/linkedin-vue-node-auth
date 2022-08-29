import Vue from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import store from './store.js';
import vueRouter from 'vue-router';
import MyMessages from './components/MyMessages';
import NewMessage from './components/NewMessage';
import Message from './components/Message';
import Register from './components/Register';
import Login from './components/Login';

Vue.config.productionTip = false;
Vue.use(vueRouter);

//Define routes
const routes = [
  { path: '/', component: MyMessages },
  { path: '/NewMessage', component: NewMessage },
  { path: '/Messages/:id', component: Message },
  { path: '/Register', component: Register },
  { path: '/Login', component: Login },
];

const router = new vueRouter({ routes, mode: 'history' });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
