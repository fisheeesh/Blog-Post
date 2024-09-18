<template>
  <div class="tag-cloud">
    <span v-for="tag in uniqueTags" :key="tag">
      <router-link :to="{ name: 'tag', params: { tag } }">
        {{ tag }}
      </router-link>
    </span>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['posts'],
  setup(props) {
    let allTags = ref([])
    props.posts.forEach(post => {
      post.tags.forEach(tag => {
        allTags.value.push(tag)
      })
    })

    let uniqueTags = allTags.value.filter((tag, index, array) => {
      return array.indexOf(tag) === index
    })

    return { uniqueTags }
  }
}
</script>

<style>
.tag-cloud {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
  /* This allows tags to wrap to the next line */
  gap: 10px;
  /* Adds spacing between tags */
}

.tag-cloud a {
  padding: 10px 15px;
  color: black;
  border-radius: 5px;
  border: 1px solid black;
  margin: 5px 0;
  box-sizing: border-box;
  transition: background 0.3s;
  display: inline-block;
  /* Ensures tags are sized properly */
}

.tag-cloud a.router-link-active {
  background: crimson;
  border: none;
  color: white;
  box-sizing: border-box;
}
</style>