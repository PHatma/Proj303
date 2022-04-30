// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIDeBH0EEAmNRlzWdre6QMhTilgikSodo",
  authDomain: "project303-eb18a.firebaseapp.com",
  projectId: "project303-eb18a",
  storageBucket: "project303-eb18a.appspot.com",
  messagingSenderId: "275052919932",
  appId: "1:275052919932:web:8249c841143e687e0f5df9",
  measurementId: "G-XCGSEHTHFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
