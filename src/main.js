import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'vue-socket.io';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:3000'),
  })
);

new Vue({
  render: h => h(App),
}).$mount('#app');
