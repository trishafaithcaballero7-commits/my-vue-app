import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home.vue";
import About from "../views/about.vue";
import Admissions from "../views/admission.vue";
import Academics from "../views/academics.vue";
import CampusLife from "../views/campusLife.vue";


const router = createRouter({

  history: createWebHistory(),

  routes: [

    {
      path: "/",
      name: "Home",
      component: Home
    },

    {
      path: "/about",
      name: "About",
      component: About
    },

    {
      path: "/admissions",
      name: "Admissions",
      component: Admissions
    },

    {
      path: "/academics",
      name: "Academics",
      component: Academics
    },

    {
      path: "/campus-life",
      name: "Campus Life",
      component: CampusLife
    }

  ]

});


export default router;