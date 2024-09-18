<template>
  <div style="text-align: center; margin-top: 10px;">
    <h4>Create Post</h4>
  </div>
  <form @submit.prevent="addPost">
    <label>Title</label>
    <input type="text" v-model="title">
    <label>Body</label>
    <textarea v-model="body"></textarea>
    <label>Tags (Hit 'Enter' to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown">
    <div class="tagsContainer">
      <p v-for="tag in tags" :key="tag" class="tag">
        {{ tag }} <span class="cross" @click="deleteTag(tag)">&#10006;</span>
      </p>
    </div>
    <div class="align">
      <button>Add Post</button>
    </div>
  </form>
</template>

<script>
import { db, timeStamp } from '@/firebase/config';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    let router = useRouter()
    let title = ref('')
    let body = ref('')
    let tags = ref([])
    let tag = ref('')

    let handleKeyDown = () => {
      if (!tags.value.includes(tag.value) && tag.value) {
        tags.value.push(tag.value)
        tag.value = ''
      }
      else tag.value = ''
    }

    let deleteTag = (tag) =>{
      tags.value = tags.value.filter(t => t !== tag)
    }

    let addPost = async() => {
      // await fetch('http://localhost:3000/posts', {
      //   method : "POST",
      //   headers : {"Content-Type" : "application/json"},
      //   body : JSON.stringify({
      //     title : title.value,
      //     body : body.value,
      //     tags : tags.value
      //   })
      // })
      let newPost = {
        title : title.value,
        body : body.value,
        tags : tags.value,
        created_at : timeStamp()
      }

      let res = await db.collection('posts').add(newPost)
      console.log(res)
      router.push('/')
    }

    return { title, body, tags, tag, handleKeyDown, addPost, deleteTag }
  }
}
</script>

<style>
form {
  max-width: 620px;
  background: #ddd;
  padding: 30px;
  border-radius: 5px;
  margin: 10px auto;
  text-align: left;
}

label {
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 0.6rem;
  color: #aaa;
  margin: 15px 0 5px 0;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: none;
}

textarea {
  width: 100%;
  height: 200px;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  resize: none;
}

input:focus,
textarea:focus {
  outline: none;
}

button {
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  background: #00ce89;
  color: white;
  border-radius: 5px;
}

.align {
  text-align: center;
  margin-top: 20px;
}
.tagsContainer{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0 0 0;
}
.tag{
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
}
.cross{
  color: red;
  margin-left: 15px;
  cursor: pointer;
}
h4{
  font-weight: bold;
  font-size: 1rem;
}
</style>