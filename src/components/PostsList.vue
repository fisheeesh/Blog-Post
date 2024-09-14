<template>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props : ['posts'],
    setup(){
    }
}
</script>

<style>

</style>