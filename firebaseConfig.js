// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvnEoYR4GkrftRK0jK-B89y2HEpDwiNrk",
  authDomain: "redleaf-7a230.firebaseapp.com",
  projectId: "redleaf-7a230",
  storageBucket: "redleaf-7a230.firebasestorage.app",
  messagingSenderId: "864714469006",
  appId: "1:864714469006:web:78581aa2b643ebb60163df",
  measurementId: "G-PWVYDC2YQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);