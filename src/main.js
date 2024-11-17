import { createApp } from 'vue';
import VueClipboard from 'vue3-clipboard' // 引入VueClipboard, 用于复制文本到剪贴板
import './index.css'

import App from './App.vue';

const app = createApp(App);

app
    .use(VueClipboard, {
        autoSetContainer: true,
        appendToBody: true,
    })
    .mount('#app');