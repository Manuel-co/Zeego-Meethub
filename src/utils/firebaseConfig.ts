// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKXolnVz1ejBFwgJbJwkz2rx3fc3AMxGo",
  authDomain: "meethub-d85bf.firebaseapp.com",
  projectId: "meethub-d85bf",
  storageBucket: "meethub-d85bf.appspot.com",
  messagingSenderId: "979486313335",
  appId: "1:979486313335:web:39267548e831d9be982f72",
  measurementId: "G-NWF25KTVTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meeetingsRef = collection(firebaseDB, 'meetings')