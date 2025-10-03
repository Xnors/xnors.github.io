import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../pages/Home.vue") },
  { path: "/home", component: () => import("../pages/Home.vue") },

  {
    path: "/justwoofus",
    component: () => import("../memberpages/Justwoofus.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
