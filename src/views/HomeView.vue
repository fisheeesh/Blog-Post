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
      <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
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
