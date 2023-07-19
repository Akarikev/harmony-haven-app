import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  
    authDomain: "harmony-haven-ba98f.firebaseapp.com",
    projectId: "harmony-haven-ba98f",
    storageBucket: "harmony-haven-ba98f.appspot.com",
    messagingSenderId: "481752684034",
    appId: "1:481752684034:web:ebfcc69314c400c28c791b",
    measurementId: "G-X4BJHRYVY4"
  };

  const app = initializeApp(firebaseConfig); 
  
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
