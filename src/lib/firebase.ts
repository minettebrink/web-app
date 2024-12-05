// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDKuFvVnALOsS7NgogvylROZV3pj71-wE",
  authDomain: "web-app-3429a.firebaseapp.com",
  projectId: "web-app-3429a",
  storageBucket: "web-app-3429a.firebasestorage.app",
  messagingSenderId: "600888160924",
  appId: "1:600888160924:web:4ba70b76896143834cf359",
  measurementId: "G-7VBWZDC044"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();