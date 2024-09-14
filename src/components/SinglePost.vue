<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body}}</p>
</template>

<script>
import { computed, ref } from 'vue';

export default {
    props : ['post']
}
</script>

<style>

</style>