import Vue from 'vue'
import App from './App.vue'
import VueNativeSock from 'vue-native-websocket'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import store from './store'

Vue.use(Vuetify)
Vue.use(VueNativeSock, 'ws://localhost:8089/ws', {store: store, format: 'json'});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
