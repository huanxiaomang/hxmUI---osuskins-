import { createApp } from 'vue';
import HxmUI from './../hxm-ui/index'
import './reset.scss';
import './assets/style/global.scss'

import App from './App.vue';

const app = createApp(App);
app.use(HxmUI);
app.mount('#app');
console.log(app);
