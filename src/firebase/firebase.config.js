import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDujHTm_L5neTdRFPdE6kdrpfL8hQxuGYs",
  authDomain: "login-7b8dc.firebaseapp.com",
  projectId: "login-7b8dc",
  storageBucket: "login-7b8dc.appspot.com",
  messagingSenderId: "775755056198",
  appId: "1:775755056198:web:5ef38ef3164c8b05a7b647",
  measurementId: "G-YHCE3K6RML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
