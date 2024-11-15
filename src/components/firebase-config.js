// firebase-config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA7d8GUY92boS__Mbl7q97GpPK7oVur6SY",
    authDomain: "authen-48d46.firebaseapp.com",
    databaseURL: "https://authen-48d46-default-rtdb.firebaseio.com",
    projectId: "authen-48d46",
    storageBucket: "authen-48d46.appspot.com",
    messagingSenderId: "638423180265",
    appId: "1:638423180265:web:9976507e60caa93371a178",
    measurementId: "G-SSR173VQ14"
  };
  

const app = initializeApp(firebaseConfig);

export default app;
