// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "demo1-b8401.firebaseapp.com",
  projectId: "demo1-b8401",
  storageBucket: "demo1-b8401.firebasestorage.app",
  messagingSenderId: "1026722131107",
  appId: "1:1026722131107:web:3a70116a054c2350192316",
  measurementId: "G-3RYMFVDTRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)