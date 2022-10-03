// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMEDqYqgw1U4UcBGIgQCuFieP-EFBU9KA",
  authDomain: "chatbox-b54de.firebaseapp.com",
  projectId: "chatbox-b54de",
  storageBucket: "chatbox-b54de.appspot.com",
  messagingSenderId: "316837865743",
  appId: "1:316837865743:web:1d7ecacc7056a9110a767a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
