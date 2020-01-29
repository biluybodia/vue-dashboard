import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue")
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main" },
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/detail",
    name: "detail",
    meta: { layout: "main" },
    component: () => import("../views/Detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
