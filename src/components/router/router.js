//https://jinyisland.kr/post/vue-router/

import {createWebHistory, createRouter} from 'vue-router';
import MainPage from "@/components/main/MainPage.vue";
import BoardMain from "@/components/board/board_main.vue";
import LoginUser from "@/components/user/login.vue";
import JoinUser from "@/components/user/join.vue";
import ModifyUser from "@/components/user/modify_user.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/board_main',
        component: BoardMain
    },
    {
        path: '/login',
        component: LoginUser
    },
    {
        path: '/join',
        component: JoinUser
    },
    {
        path: '/modify_user',
        component: ModifyUser
    }
]

const router = createRouter({
    mode: "history",
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition){
        //console.log(">>> savedPosition: " + savedPosition)
        if(savedPosition) {
            return savedPosition
        } else {
        return{
            left : 0,
            top : 0
        }}

    }
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