// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjIbkK-7duu1pm4-9tEdPUdXWp5rf28GE",
  authDomain: "ai-services-98a02.firebaseapp.com",
  projectId: "ai-services-98a02",
  storageBucket: "ai-services-98a02.appspot.com",
  messagingSenderId: "186486670230",
  appId: "1:186486670230:web:e58a10569c915a8cded3b7",
  measurementId: "G-CBKFS5274J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, app };
