// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwaMHps0k2Y2QdfuwQZUUIq38od9JSsXc",
  authDomain: "simple-login-792cc.firebaseapp.com",
  projectId: "simple-login-792cc",
  storageBucket: "simple-login-792cc.appspot.com",
  messagingSenderId: "748763052768",
  appId: "1:748763052768:web:afd7db6aa63f2251336e85",
  measurementId: "G-322FP4X08R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);