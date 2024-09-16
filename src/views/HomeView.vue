<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div>
      <input type="text" placeholder="search post..." v-model="search">
    </div>
    <div v-if="posts.length > 0" class="layout">
      <div><PostsList :posts="searchPosts"></PostsList></div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
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



    let { posts, error, load } = getPosts() // {posts, error, load} will return and its gonna work like object destructing

    load()

    let searchPosts = computed(() => {
      return posts.value.filter(post => {
        return post.title.includes(search.value)
      })
    })

    return { posts, error, search, searchPosts }
  }
}
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
