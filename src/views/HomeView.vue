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
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';


export default {
  components: { PostsList },
  setup() {
    let posts = ref([])

    let error = ref("")


    let load = async () => {
      try {
        let response = await fetch('http://localhost:3000/posts')
        if(response.status === 404){
          throw new Error('Not Found URL!')
        }
        let datas = await response.json()
        posts.value = datas
      }
      catch(e){
        console.log(e.message)
        error.value = e.message
      }
    }

    load()

    return { posts, error }
  }
}
</script>
