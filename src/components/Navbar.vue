<script>
import Homepage from "./Homepage.vue"
import Events from "./Event.vue"
import ContactUs from "./ContactUs.vue"
import Courses from "./Courses.vue"
import AboutUs from "./AboutUs.vue"
import Alumni from "./Alumni.vue"
import Partnerships from "./Partnerships.vue"
import Library from "./Library.vue"
</script>

<template>
<v-app-bar color="blue">
        <div>
            <v-btn to="/" colors="white" dark>Home</v-btn>
        </div>
        <div>
            <v-btn to="/events" colors="white" dark>Events</v-btn>
        </div>
        <div>
            <v-btn to="/contactus" colors="white" dark>ContactUs</v-btn>
        </div>
        <div>
            <v-btn to="/courses" colors="white" dark>Courses</v-btn>
        </div>
        <div>
            <v-btn to="/aboutus" colors="white" dark>AboutUs</v-btn>
        </div>
        <div>
            <v-btn to="/alumni" colors="white" dark>Alumni</v-btn>
        </div>
        <div>
            <v-btn to="/partnership" colors="white" dark>Partnerships</v-btn>
        </div>
        <div>
            <v-btn to="/library" colors="white" dark>Library</v-btn>
        </div>
    </v-app-bar>
</template>