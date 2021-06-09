import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/wittyskates.github.io/",
            name: "Home",
            component: () => import("./components/Home")
        },
    ]
});