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
      Loading...
    </div>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import getPosts from '@/composables/getPosts';

export default {
  components: { PostsList },
  setup() {
    
    let { posts, error, load } = getPosts() // {posts, error, load} will return and its gonna work like object destructing

    load()

    return { posts, error }
  }
}
</script>
