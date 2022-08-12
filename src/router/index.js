import {createRouter, createWebHistory } from "vue-router";
import huddleIntro from '/src/components/pages/huddleIntro.vue';
import Home from "../components/pages/Home.vue";


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/huddleIntro',
        component: huddleIntro
    },

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});