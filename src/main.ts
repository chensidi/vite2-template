import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rem'
import { Button } from 'vant'

const app = createApp(App)

app.use(router)
    .use(store)
    .mount('#app')
    
app.use(Button)

