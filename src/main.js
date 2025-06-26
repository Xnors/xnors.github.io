import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createI18n } from 'vue-i18n'
import en from './locales/en.json';
import zh from './locales/zh.json';

const i18n = createI18n({
    locale: 'zh', // 设置默认语言
    fallbackLocale: 'zh', // 设置备用语言
    messages: {
        en,
        zh,
    },
});

createApp(App).use(i18n).mount('#app')
