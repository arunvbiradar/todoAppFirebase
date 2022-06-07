import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPLZmU_OtK_Znn_yFbmmYFGcCDGPtYE_w",
  authDomain: "todoappfirebase-a3972.firebaseapp.com",
  projectId: "todoappfirebase-a3972",
  storageBucket: "todoappfirebase-a3972.appspot.com",
  messagingSenderId: "515638870483",
  appId: "1:515638870483:web:b39554bd793626dfa46f26",
  measurementId: "G-JHNYQ2WFCM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
