<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length > 0" class="layout">
    <div><PostsList :posts="filteredPosts"></PostsList></div>
    <div><TagCloud :posts="posts"></TagCloud></div>
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
import { computed } from 'vue';
export default {
  props: ['tag'],
  components: {
    TagCloud,
    Spinner, PostsList
  },
  setup(props) {
    let { posts, error, load } = getPosts()

    load()

    let filteredPosts = computed(() => {
      return posts.value.filter(post => post.tags.includes(props.tag))
    })

    return { posts, error, filteredPosts }
  }
}
</script>

<style></style>