// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_4w63IpgHeqpWMTFd6IPTAmIr8eoXdXc",
  authDomain: "netflixgpt-c1dd2.firebaseapp.com",
  projectId: "netflixgpt-c1dd2",
  storageBucket: "netflixgpt-c1dd2.appspot.com",
  messagingSenderId: "902951505592",
  appId: "1:902951505592:web:489d8de094280f21aa6e4d",
  measurementId: "G-Z9EXGBDGH6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Keeping the auth here so that it can be reffered in multiple places
const auth = getAuth();

export { auth };
