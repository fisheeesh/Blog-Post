import { db } from "@/firebase/config";
import { ref } from "vue";

let getPost = (id) => {
  let post = ref(null);
  let error = ref("");

  let load = async () => {
    try {
      let doc = await db.collection('posts').doc(id).get()
      post.value = { ...doc.data(), id: doc.id }
      
    } catch (e) {
      error.value = e.message;
    }
  };

  return { post, error, load };
};

export default getPost;
