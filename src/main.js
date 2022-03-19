import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/router'

const myApp = createApp(App);
myApp.use(router);
myApp.mount('#app');
//createApp(App).mount('#app')

/*
import Vue from 'vue'
import App from './App.vue'
import {router} from '@/components/router/router'

new Vue({
    router,
    render:h=>h(app)
}).$mount(#app)
*/