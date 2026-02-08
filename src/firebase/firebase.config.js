// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH9SBQXo7XxaPutvpizzJQHP8ou9RlNkY",
  authDomain: "dragon-news-b112b.firebaseapp.com",
  projectId: "dragon-news-b112b",
  storageBucket: "dragon-news-b112b.firebasestorage.app",
  messagingSenderId: "596485509671",
  appId: "1:596485509671:web:e643226d7e7da574483402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;