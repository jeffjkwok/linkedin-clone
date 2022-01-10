// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIcbAayMch7DLNyve5XodtrXc4zkryIvc",
  authDomain: "linkedin-clone-2aa43.firebaseapp.com",
  projectId: "linkedin-clone-2aa43",
  storageBucket: "linkedin-clone-2aa43.appspot.com",
  messagingSenderId: "470984861017",
  appId: "1:470984861017:web:95c89d5293d06611e3d848",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
