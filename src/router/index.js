import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home.vue";
import About from "../views/about.vue";
import Admissions from "../views/admission.vue";
import Academics from "../views/academics.vue";
import CampusLife from "../views/campusLife.vue";
import SampleData from '../views/SampleData.vue'
import SampleMethods from '../views/SampleMethods.vue'
import SampleVmodel from '../views/SampleVmodel.vue'






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
    },

    { path: '/sample-data',
       name: 'sampleData',
        component: SampleData 
    },

    { path: '/sample-methods',
       name: 'sampleMethods',
        component: SampleMethods 
    },

    { path: '/sample-vmodel',
       name: 'sampleVmodel',
        component: SampleVmodel 
    },

  ]

});


export default router;