import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hero from "../components/Hero.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      
      {
        path: "",
        name: "Hero",
        component: Hero
      },
      
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },      
      {
        path: "learning",
        name: "learning",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Learning.vue"),
      },

      {
        path: "departments",
        name: "departments",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Departments.vue"),
      },
      
      {
        path: "videos",
        name: "videos",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Videos.vue"),
      },


    ]
  },
  
  {
    path: "/login",
    name: "Login",
    component: Login

  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),

  },
  {
    path: "/discussion",
    name: "discussion",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Discussion.vue"),

  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
