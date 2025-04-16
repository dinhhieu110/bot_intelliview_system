// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB-vaRHLpYjM2ZeYpfpdv8qaUguoVFmq4",
  authDomain: "botinterview.firebaseapp.com",
  projectId: "botinterview",
  storageBucket: "botinterview.firebasestorage.app",
  messagingSenderId: "254908009863",
  appId: "1:254908009863:web:df2dc152a1c835c8ea5722",
  measurementId: "G-WF1JCTQGN9",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
