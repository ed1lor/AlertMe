import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'

createApp(App).use(router).mount('#app')

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})