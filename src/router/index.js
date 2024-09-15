import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailPost from '@/views/DetailPost.vue'
import NotFound from '@/views/NotFound.vue'
import CreatePost from '@/views/CreatePost.vue'
import Tag from '@/views/Tag.vue'

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
  },
  {
    path : "/create",
    name : "create",
    component : CreatePost
  },
  {
    path : "/tags/:tag",
    name : 'tag',
    component : Tag,
    props : true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
