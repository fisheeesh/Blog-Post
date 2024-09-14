<template>
  <div class="home">
    <h1>Blog Post</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length > 0">
      <PostsList :posts="posts"></PostsList>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostsList from '../components/PostsList'
import getPosts from '@/composables/getPosts';

export default {
  components: {
    Spinner, PostsList
  },
  setup() {

    let { posts, error, load } = getPosts() // {posts, error, load} will return and its gonna work like object destructing

    load()

    return { posts, error }
  }
}
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
