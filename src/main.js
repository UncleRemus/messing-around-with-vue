import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { mapState } from 'vuex';
import settings from '../settings.json';

Vue.config.productionTip = false;

Vue.filter('money', function(value) {
  if (!value) return '';
  let symbol = settings && settings.currency && settings.currency.symbol ? settings.currency.symbol : '›';
  value = value.toString();
  return symbol + value;
});

new Vue({
  router,
  store,
  computed: mapState(['count', 'product']),
  render: h => h(App)
}).$mount('#app');
