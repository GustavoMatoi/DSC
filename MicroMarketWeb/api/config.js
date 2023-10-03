import { initializeApp  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app"
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBz1VqLK13GF8Dt1Q1uM11ROUfUV4qqoBM",
    authDomain: "micromarket-9ba9c.firebaseapp.com",
    projectId: "micromarket-9ba9c",
    storageBucket: "micromarket-9ba9c.appspot.com",
    messagingSenderId: "62218654405",
    appId: "1:62218654405:web:49f2f1d0cf136414fd96ac"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Iniciando o Firestore
const firebaseBD = getFirestore(app)


firebase.initializeApp(firebaseConfig);



export {firebase, firebaseBD}