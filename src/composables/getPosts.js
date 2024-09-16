import { ref } from "vue";
import { db } from "@/firebase/config";

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");
  let load = async () => {
    try {
      let response = await db.collection('posts').get()
      posts.value = response.docs.map(doc => ({...doc.data(), id : doc.id}))
    } catch (e) {
      console.log(e.message);
      error.value = e.message;
    }
  };

  return { posts, error, load }
};

export default getPosts