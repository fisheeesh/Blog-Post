<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <h3>Detail Post of {{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <button class="delete" @click="deletePost">Delete</button>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '@/composables/getPost';
import { db } from '@/firebase/config';
import { useRoute, useRouter } from 'vue-router';

export default {
  components: { Spinner },
  props: ['id'],
  setup(props) {
    let router = useRouter()
    let route = useRoute()
    let { post, error, load } = getPost(route.params.id)

    load()

    let deletePost = async () => {
      await db.collection('posts').doc(props.id).delete()
      router.push({ name: 'home' })
    }

    return { post, error, deletePost }
  }
}
</script>

<style>
.delete {
  background: crimson;
}
</style>