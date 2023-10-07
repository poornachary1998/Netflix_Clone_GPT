// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLvpzG4rIBxDy0-Gk3Ef31TGRBe6Ed_-k",
  authDomain: "netflixgpt11.firebaseapp.com",
  projectId: "netflixgpt11",
  storageBucket: "netflixgpt11.appspot.com",
  messagingSenderId: "1026164819054",
  appId: "1:1026164819054:web:77293a2d27816e56ad127f",
  measurementId: "G-TBP2N6WYYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
