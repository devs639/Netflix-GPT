// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPcCPXQKCqkEQhDKmsmOGt42NnbbTjgTU",
  authDomain: "netflix-gpt-d36a9.firebaseapp.com",
  projectId: "netflix-gpt-d36a9",
  storageBucket: "netflix-gpt-d36a9.appspot.com",
  messagingSenderId: "696169588612",
  appId: "1:696169588612:web:48c02eaf665668ac02dfd1",
  measurementId: "G-KNKQD0T8G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();