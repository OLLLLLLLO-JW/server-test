import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx1KNRlG8prvQTYIs5phCbh9GsRvVBQpQ",
  authDomain: "uforeporting-66cdd.firebaseapp.com",
  projectId: "uforeporting-66cdd",
  storageBucket: "uforeporting-66cdd.appspot.com",
  messagingSenderId: "804772160279",
  appId: "1:804772160279:web:97d32079f994b0eb948d52",
  measurementId: "G-5WL4BJWLPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);