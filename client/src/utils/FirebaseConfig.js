// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ7xX5aYy3pzCyFj1wo5utD9J7Lmu9Urs",
  authDomain: "whatsapp-clone-bc17d.firebaseapp.com",
  projectId: "whatsapp-clone-bc17d",
  storageBucket: "whatsapp-clone-bc17d.appspot.com",
  messagingSenderId: "950843931931",
  appId: "1:950843931931:web:dcbea5cd0ce0f36440a7be",
  measurementId: "G-G3C4EP3JRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);