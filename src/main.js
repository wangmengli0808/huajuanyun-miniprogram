import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

import 'font-awesome/css/font-awesome.min.css'
import './assets/css/common.css'

const app = new Vue(App)
app.$mount()
