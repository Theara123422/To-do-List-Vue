import './main.css';
import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App);
library.add(fas)
app.component('font-awesome-icon',FontAwesomeIcon).mount('#app')



