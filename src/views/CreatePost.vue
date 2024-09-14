<template>
    <h1>Create Post</h1>
    <form>
        <label for="">Title</label>
        <input type="text" required v-model="title">
        <label>Body</label>
        <textarea required v-model="body"></textarea>
        <label>Tags(hit enter to add a tag)</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
        <div class="tagContainer">
            <p v-for="tag in tags" :key="tag" class="tag">{{ tag }}</p>
        </div>
        <button>Add Post</button>
    </form>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(){
        let title = ref('')
        let body = ref('')
        let tag = ref('')
        let tags = ref([])

        let handleKeydown = () =>{
            if(!tags.value.includes(tag.value) && tag.value){
                tag.value = tag.value.replace(/\s/, '')
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        return { title, body, tag, handleKeydown, tags }
    }
}
</script>

<style>
form{
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}
input, textarea{
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee
}
label{
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px
}
label::before{
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
}
button{
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
}
.tagContainer{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}
.tag{
    display: inline-block;
    padding: 10px 15px;
    border: 1px solid black;
    border-radius: 50px;
    color: black;
    margin: 0 5px 5px 0;
    font-weight: bold;
}
</style>