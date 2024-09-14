import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailPost from '@/views/DetailPost.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : "/posts/:id",
    name : "detail",
    component : DetailPost,
    props : true
  },
  //redirect
  {
    path :'/posts',
    redirect : "/"
  },
  //catchAll
  {
    path : "/:catchAll(.*)",
    component : NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
