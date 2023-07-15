
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZpF-GSiQwYkXo_gV6fT_mmZ7urZQTe0U",
  authDomain: "journal-app-2edf2.firebaseapp.com",
  projectId: "journal-app-2edf2",
  storageBucket: "journal-app-2edf2.appspot.com",
  messagingSenderId: "1069251875863",
  appId: "1:1069251875863:web:ef1b9f477aae5f4e78b852"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)