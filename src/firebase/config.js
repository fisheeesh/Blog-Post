import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9R2UNLl1R9RnNayndXQ5AqG3bWy8KLMQ",
  authDomain: "vue-blog-system-571db.firebaseapp.com",
  projectId: "vue-blog-system-571db",
  storageBucket: "vue-blog-system-571db.appspot.com",
  messagingSenderId: "450185516630",
  appId: "1:450185516630:web:efac4d51253c13065b0df7",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

let timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { db, timeStamp };
