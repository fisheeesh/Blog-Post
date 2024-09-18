import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailPost from '@/views/DetailPost.vue'
import CreatePost from '@/views/CreatePost.vue'
import Tag from '@/views/Tag.vue'
import RealTime from '@/views/RealTime.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/detail/:id',
    name : 'detail',
    component : DetailPost,
    props : true
  },
  {
    path : '/create',
    name : 'create',
    component : CreatePost
  },
  {
    path : '/tags/:tag',
    name : 'tag',
    component : Tag,
    props : true
  },
  {
    path : '/realtime',
    name : 'realtime',
    component : RealTime
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
