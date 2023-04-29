// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log('environment variable', import.meta.env.VITE_PASS);
// console.log('environment variable', import.meta.env.VITE_apiKey  );
const firebaseConfig = {
  apiKey: "AIzaSyBAsE3h_Pf7-9KCvLEQ75dpLsROKiows2g",
  authDomain: "the-news-dragon-client-70e2f.firebaseapp.com",
  projectId: "the-news-dragon-client-70e2f",
  storageBucket: "the-news-dragon-client-70e2f.appspot.com",
  messagingSenderId: "363996419999",
  appId: "1:363996419999:web:c5d2c5115e0ee691e00faa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;