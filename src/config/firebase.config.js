// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7UTq-y1DjPb0UuNJ83ZLnE81Ht405OQI",
  authDomain: "todo-karma.firebaseapp.com",
  projectId: "todo-karma",
  storageBucket: "todo-karma.appspot.com",
  messagingSenderId: "757248016606",
  appId: "1:757248016606:web:60058f2edc4c08c1b5824f",
  measurementId: "G-07LN1JMQ97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
