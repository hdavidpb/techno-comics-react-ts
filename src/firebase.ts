// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVJm_MRCPhnwft6X9MmTVINOCXQv4YHsI",
  authDomain: "techno-comics-app.firebaseapp.com",
  projectId: "techno-comics-app",
  storageBucket: "techno-comics-app.appspot.com",
  messagingSenderId: "130633294524",
  appId: "1:130633294524:web:9e5ee3bfab9c163196e6b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
