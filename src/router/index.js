import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Gryffindor",
    name: "Gryffindor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Gryffindor.vue"),
  }, 
  {
    path: "/Hufflepuff",
    name: "Hufflepuff",
    component: () =>
      import("../views/Hufflepuff.vue"),
  }, 
  {
    path: "/Ravenclaw",
    name: "Ravenclaw",
    component: () =>
      import("../views/Ravenclaw.vue"),
  }, 
  {
    path: "/Slytherin",
    name: "Slytherin",
    component: () =>
      import("../views/Slytherin.vue"),
  }, 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
