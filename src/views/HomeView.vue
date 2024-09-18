<template>
  <input type="text" v-model="search" class="search" placeholder="search post...">
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length > 0">
    <div class="layout">
      <div><PostsList :posts="searchedPosts"></PostsList></div>
      <div><TagCloud :posts="posts"></TagCloud></div>
    </div>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostsList from '../components/PostsList'
import getPosts from '@/composables/getPosts';
import { computed, ref } from 'vue';
export default {
  components: {
    TagCloud,
    Spinner, PostsList
  },
  setup() {
    let search = ref('')
    let { posts, error, load } = getPosts()

    load()

    let searchedPosts = computed(() =>{
      return posts.value.filter(post => {
        return post.title.includes(search.value)
      })
    })

    return { posts, error, search, searchedPosts }
  }
}
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;
}
.search{
  border: 1px solid #ddd;
}
</style>