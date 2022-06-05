// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhNu96H4ox4y1YYjaw6pwgBz50kloeryo",
  authDomain: "finalproject-efff4.firebaseapp.com",
  projectId: "finalproject-efff4",
  storageBucket: "finalproject-efff4.appspot.com",
  messagingSenderId: "108680057273",
  appId: "1:108680057273:web:fa0701361d193782c2e668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);
export default storage;