//https://jinyisland.kr/post/vue-router/

import {createWebHistory, createRouter} from 'vue-router';
import MainPage from "@/components/main/MainPage";

const routes = [{
    path: '/',
    component: MainPage
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

/*
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from "@/components/main/main";

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[{
        path:'/',
        component:Main
    }]
})

 */