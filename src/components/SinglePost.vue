<template>
  <router-link :to="{ name: 'detail', params: { id: post.id } }">
    <h2>{{ post.title }}</h2>
  </router-link>
  <p>{{ post.body }}</p>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  props: ['post']
}
</script>

<style></style>