import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/wittyskates.github.io/",
            name: "About",
            component: () => import("./components/About")
        },
        {
            path: "/wittyskates.github.io/home",
            name: "Home",
            component: () => import("./components/Home")
        }
    ]
});