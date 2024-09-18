<template>
  <div class="post">
    <router-link :to="{ name: 'detail', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <p @click="isShow = !isShow">{{ isShow ? post.body : cutPostBody }}</p>
    <div class="tagsContainer">
      <p v-for="tag in post.tags" :key="tag" class="tag">
        <router-link :to="{ name: 'tag', params: { tag } }">
          {{ tag }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  props: ['post'],
  setup(props) {
    let isShow = ref(false)

    let cutPostBody = computed(() => {
      return props.post.body.substring(0, 21) + "... See more"
    })

    return { isShow, cutPostBody }
  }
}
</script>

<style>
h2 {
  color: crimson;
  font-weight: bold;
}

a {
  text-decoration: none;
}
.tagsContainer a{
  color: black;
}

.post {
  padding: 20px;
  margin: 10px 0px;
  background: #ddd;
  border-radius: 5px;
}
</style>