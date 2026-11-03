import { createApp } from 'vue'

import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/button-group/style/css'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/tooltip/style/css'
import 'element-plus/es/components/switch/style/css'
import 'element-plus/es/components/slider/style/css'
import 'element-plus/es/components/tabs/style/css'
import 'element-plus/es/components/select/style/css'
import 'element-plus/es/components/drawer/style/css'
import 'element-plus/es/components/radio-group/style/css'
import 'element-plus/es/components/radio-button/style/css'
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/message/style/css'

import '@/assets/styles/index.scss'

import App from './App'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
