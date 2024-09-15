<template>
    <!-- <h1>Create Post</h1> -->
    <form @submit.prevent="addPost">
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
/**
 * to use router with composable api we need to import useRouter function from vue-router
 * This is the pattern for using router in composable api 
 * 1 - import useRouter from 'vue-router'
 * 2 - store it in a variable
 * after that we can use it like our normal router -> this.$router
 */
import { useRouter } from 'vue-router';

export default {
    setup() {
        let router = useRouter() //this.$router
        // console.log(router)
        let title = ref('')
        let body = ref('')
        let tag = ref('')
        let tags = ref([])

        let handleKeydown = () => {
            if (!tags.value.includes(tag.value) && tag.value) {
                tag.value = tag.value.replace(/\s/, '')
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        let addPost = async () => {
            await fetch('http://localhost:3000/posts', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: title.value,
                    body: body.value,
                    tags: tags.value
                })
            })

            title.value = ''
            body.value = ''
            tags.value = []


            //redirect user to home page
            router.push({ name: 'home' })
        }

        return { title, body, tag, handleKeydown, tags, addPost }
    }
}
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}

input,
textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
}

textarea {
    height: 160px;
}

label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
}

label::before {
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

button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
}

.tagContainer {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}

.tag {
    display: inline-block;
    padding: 10px 15px;
    border: 1px solid black;
    border-radius: 50px;
    color: black;
    margin: 0 5px 5px 0;
    font-weight: bold;
}
</style>