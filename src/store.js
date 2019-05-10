import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    product: {
      title: 'Socks',
      image: './assets/green-sock.jpg',
      bnc: 88.22,
      imap: 200.0,
      inventory: {
        dfw: 120,
        ecom: 1,
        aust: 4
      }
    }
  },
  getters: {
    productData: state => {
      return state.product;
    },
    inventoryTotal: state => {
      let inventoryObject = state.product.inventory;
      let sum = Object.keys(inventoryObject).reduce((p, k) => {
        return p + inventoryObject[k];
      }, 0);
      return sum;
    }
  },
  mutations: {},
  actions: {}
});
