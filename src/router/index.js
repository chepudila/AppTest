import { createRouter, createWebHistory } from "vue-router";
import { store } from "../store";
import { getAllVacancies } from "../api";
import DashboardView from "../components/RouterViews/DashboardView.vue";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: DashboardView,
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(() => {
    if (!store.getters.GET_VACANCIES.length) {
        getAllVacancies();
    }
});

export { router };
