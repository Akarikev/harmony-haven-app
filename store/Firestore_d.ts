import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdb7yXoUIHLnk4Zk_TpZ8oaVp8HrDoJ-I",
  
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

export { db };

