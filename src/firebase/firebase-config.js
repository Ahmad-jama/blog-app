// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmwHzaQoH3G5NIo-6TyhACghv60FSMUBs",
  authDomain: "simple-blog-d7f0d.firebaseapp.com",
  projectId: "simple-blog-d7f0d",
  storageBucket: "simple-blog-d7f0d.appspot.com",
  messagingSenderId: "662920611762",
  appId: "1:662920611762:web:8d03cbd686ac4ac9dc86ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
