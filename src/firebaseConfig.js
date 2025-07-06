// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv30zRlqQqvxmhTNYJ89BGdEyReYVSzUc",
  authDomain: "northeast-tour.firebaseapp.com",
  projectId: "northeast-tour",
  storageBucket: "northeast-tour.appspot.com",
  messagingSenderId: "364266831769",
  appId: "1:364266831769:web:af9f14528d3a999efa5d08",
  measurementId: "G-89ZQ186CR7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
