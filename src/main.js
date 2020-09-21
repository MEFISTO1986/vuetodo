import Vue from 'vue'
import App from './components/App/App.vue'
 
window.App = new Vue({
  el: '#app',
  render: h => h(App)
})