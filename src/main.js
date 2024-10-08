import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './index.css'

import App from './App.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: App, children: [
                { path: 'home', component: Home },
                { path: 'about', component: About }
            ]
        }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');