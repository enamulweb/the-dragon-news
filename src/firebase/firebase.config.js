// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiyJbLO18pW4oTp7J2y81ze3pN6HaP674",
  authDomain: "the-news-gem.firebaseapp.com",
  projectId: "the-news-gem",
  storageBucket: "the-news-gem.appspot.com",
  messagingSenderId: "141486121707",
  appId: "1:141486121707:web:abd0c771ef995bca5494ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;