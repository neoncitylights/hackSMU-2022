// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPMwyXS0pDB0xMIjwlukeS-zZMytPgk34",
  authDomain: "project1-f0e78.firebaseapp.com",
  projectId: "project1-f0e78",
  storageBucket: "project1-f0e78.appspot.com",
  messagingSenderId: "707060068974",
  appId: "1:707060068974:web:824708a72074d2d78d2c7f",
  measurementId: "G-FBW2VEQ15E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
