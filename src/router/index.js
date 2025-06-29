
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router


Vue.use(Router)  //Vue全局使用Router

export default new Router({
    routes: [
        {
            path: '/',
            name: 'App',
            component: () => { import('@/App.vue') }   //对应的组件模板
        }, {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => { import('@/views/Timeline.vue') }
        },{
            path:"en",
            name:"en",
            children:[
                {
                    path:"/",
                    name:"Home",
                    component:()=>import("@/views/Home.vue")
                }
            ]
        }
    ]
})