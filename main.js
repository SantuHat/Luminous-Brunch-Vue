import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import './layout/header';
import './pages/5-1_booking.js';
import './pages/5-1-1_booking.js';
import './pages/4_menu.js';
import './pages/_register.js';
import './pages/_login.js';
import './pages/_forgotPassword.js';
import './pages/6-1-1-1_modify-member-info.js';
import './pages/6-1-1-2_reservation-info.js';
import './pages/index.js';
import './pages/4_menuDetail.js'
import './pages/MealData.js'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
