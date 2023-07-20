// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6kX4ElE8YxNu4bVjLIlP7Sa-wn3L9EWM",
  authDomain: "harmony-haven-38bf0.firebaseapp.com",
  projectId: "harmony-haven-38bf0",
  storageBucket: "harmony-haven-38bf0.appspot.com",
  messagingSenderId: "329930341222",
  appId: "1:329930341222:web:7064015f47bdaa9d12e6a7",
  measurementId: "G-5F3J9ZEZ8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };

