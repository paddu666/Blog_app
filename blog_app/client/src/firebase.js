import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-6b41c.firebaseapp.com",
  projectId: "blog-app-6b41c",
  storageBucket: "blog-app-6b41c.appspot.com",
  messagingSenderId: "1023479605554",
  appId: "1:1023479605554:web:129efb95c0d5dd1df70f2b"
};
export const app = initializeApp(firebaseConfig);