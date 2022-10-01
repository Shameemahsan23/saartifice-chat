// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB0lNOOAUvYL71NQ8dKE5M0Bv-hjv8pyP8",
  authDomain: "chat-c21bc.firebaseapp.com",
  projectId: "chat-c21bc",
  storageBucket: "chat-c21bc.appspot.com",
  messagingSenderId: "214563144155",
  appId: "1:214563144155:web:59b882ae9c35e9c438a7fe"
};
// const firebaseConfig = {
//   apiKey: process.env.ApiKey,
//   authDomain: process.env.AuthDomain,
//   projectId: process.env.ProjectId,
//   storageBucket: process.env.StorageBucket,
//   messagingSenderId: process.env.MessagingSenderId,
//   appId: process.env.AppId
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth() 
export const storage = getStorage();
export const db = getFirestore();