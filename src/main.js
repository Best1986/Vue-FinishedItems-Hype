import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//Tab close prompt after btn click
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = 'Have you made a record of your count? Your data will not be saved.';
});