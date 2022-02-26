// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgf1_Dgyds-lmhtjLHOBnz4jNI3pkhdJs",
  authDomain: "russal-arya.firebaseapp.com",
  projectId: "russal-arya",
  storageBucket: "russal-arya.appspot.com",
  messagingSenderId: "88115135035",
  appId: "1:88115135035:web:c9a0a7d3e237411af8d21e",
  measurementId: "G-7MHMMZGKYM"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize db
const db = app.firestore();

export {app, analytics, db}