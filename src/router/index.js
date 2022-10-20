import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMe.vue'
import Portpolio from '../views/Portpolio.vue'
import Resume from '../views/Resume.vue'
import year_19 from '../views/year/2019.vue'
import year_20 from '../views/year/2020.vue'
import year_21 from '../views/year/2021.vue'
import year_22 from '../views/year/2022.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: AboutMe
  },
  {
    path: '/portpolio',
    name: 'portpolio',
    component: Portpolio
  },
  {
    path: '/portpolio/2019',
    name: 'year_19',
    component: year_19
  },
  {
  path: '/portpolio/2020',
  name: 'year_20',
  component: year_20
  },
  {
    path: '/portpolio/2021',
    name: 'year_21',
    component: year_21
  },
  {
  path: '/portpolio/2022',
  name: 'year_22',
  component: year_22
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
