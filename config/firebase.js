// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
 

const firebaseConfig = {
  apiKey: "AIzaSyC0NSO3ccLDfMIcFtGl_7npEK1-ldDh0xU",
  authDomain: "contactforms-60298.firebaseapp.com",
  projectId: "contactforms-60298",
  storageBucket: "contactforms-60298.appspot.com",
  messagingSenderId: "238664371194",
  appId: "1:238664371194:web:1f1569e585c33f702e7243",
  measurementId: "G-3RHT407Q1Q",
  databaseURL:  "https://contactforms-60298-default-rtdb.asia-southeast1.firebasedatabase.app"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}