// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHMF_FoOYcWIu60l5jVFV3nQQxEHQiBSA",
  authDomain: "myuni-71525.firebaseapp.com",
  projectId: "myuni-71525",
  storageBucket: "myuni-71525.appspot.com",
  messagingSenderId: "305110844543",
  appId: "1:305110844543:web:ec98f3371053ce9dd8ab4a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};