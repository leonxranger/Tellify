// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxNYvt0WRvPPIrXotHFR9bYzpUWighHbw",
  authDomain: "tellify-1c378.firebaseapp.com",
  projectId: "tellify-1c378",
  storageBucket: "tellify-1c378.firebasestorage.app",
  messagingSenderId: "440041560892",
  appId: "1:440041560892:web:4ef11fcc30161870481c39",
  measurementId: "G-YY3FHVCG91"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export  const db = getFirestore(app);
export const googleprovider = new GoogleAuthProvider();