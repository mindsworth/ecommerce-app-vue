import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import LandingComponent from "../views/LandingComponent.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingComponent,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        name: "Home",
        path: "/",
        alias: "/home",
        component: () => import("../views/Home.vue")
      },
      {
        name: "Shop",
        path: "shop",
        component: () => import("../views/Shop.vue")
      },
      {
        name: "Shop-Filter",
        path: "shop/:categoryName",
        component: () => import("../views/Shop.vue"),
        props: true
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Auth.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Auth.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  }
});

export default router;
