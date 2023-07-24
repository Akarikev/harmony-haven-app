// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

  authDomain: "harmony-haven-ba98f.firebaseapp.com",
  projectId: "harmony-haven-ba98f",
  storageBucket: "harmony-haven-ba98f.appspot.com",
  messagingSenderId: "481752684034",
  appId: "1:481752684034:web:ebfcc69314c400c28c791b",
  measurementId: "G-X4BJHRYVY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);