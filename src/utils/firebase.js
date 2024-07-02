// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEQorupAPFECO4HgZ8yL6F3ew5uX6fvcQ",
    authDomain: "nexysu.firebaseapp.com",
    projectId: "nexysu",
    storageBucket: "nexysu.appspot.com",
    messagingSenderId: "423111117536",
    appId: "1:423111117536:web:fb334044e5a6997c745e85",
    measurementId: "G-FKT9N7T3TB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

