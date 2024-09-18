import { db } from "@/firebase/config"
import { ref } from "vue"

let getPosts = () => {
  let posts = ref([])
  let error = ref('')
  let load = async () => {
    try {
      // await new Promise((resolve, _) => setTimeout(resolve, 2000))
      // let response = await fetch('http://localhost:3000/posts/')
      // if (response.status === 404) throw new Error('Not Found URL!')
      // let datas = await response.json()
      // posts.value = datas
      let response = await db.collection('posts').orderBy("created_at", "desc").get()
      posts.value = response.docs.map(doc => ({...doc.data(), id : doc.id}))
    }
    catch (err) {
      error.value = err.message
    }
  }


  return { posts, error, load }
}

export default getPosts;