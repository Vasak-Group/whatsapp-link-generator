import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGlobe,
  faPhone,
  faMessage,
  faArrowLeft,
  faVideo,
  faEllipsisV,
  faCircleHalfStroke,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons'

/* Add icons to library */
library.add(faGlobe, faPhone, faMessage, faArrowLeft, faVideo, faEllipsisV, faCircleHalfStroke, faMoon, faSun)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
