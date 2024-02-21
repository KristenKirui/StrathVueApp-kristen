import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "../components/Homepage.vue"
import Events from "../components/Event.vue"
import ContactUs from "../components/ContactUs.vue"
import Courses from "../components/Courses.vue"
import AboutUs from "../components/AboutUs.vue"
import Alumni from "../components/Alumni.vue"
import Partnerships from "../components/Partnerships.vue"
import Library from "../components/Library.vue"


const routes = [
    {
        path:'/',
        name:'homepage',
        component: Homepage,
    },
    {
        path:'/events',
        name:'events',
        component: Events,
    },
    {
        path:'/contactus',
        name:'contactus',
        component: ContactUs,
    },
    {
        path:'/courses',
        name:'courses',
        component: Courses,
    },
    {
        path:'/aboutus',
        name:'aboutus',
        component: AboutUs,
    },
    {
        path:'/alumni',
        name:'alumni',
        component: Alumni,
    },
    {
        path:'/partnership',
        name:'partnership',
        component: Partnerships,
    },
    {
        path:'/library',
        name:'library',
        component: Library,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router