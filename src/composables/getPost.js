import { db } from "@/firebase/config";
import { ref } from "vue";
let getPost = (id) => {
  let post = ref(null);
  let error = ref("");

  let load = async () => {
    try {
      // await new Promise((resolve, _) => setTimeout(resolve, 2000))
      // let response = await fetch("http://localhost:3000/posts/" + id);
      // if (response.status === 404) throw new Error("Not Found URL!");
      // let data = await response.json();
      // post.value = data;
      let doc = await db.collection("posts").doc(id).get();
      post.value = { ...doc.data(), id: doc.id };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
