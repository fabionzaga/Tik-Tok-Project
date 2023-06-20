import { initializeApp } from "firebase/app";
import {getFirestore, } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCO8iHFQxO8rJ3SyrNybF_fR6GLQuja54Y",
  authDomain: "tiktok---jornada-8a439.firebaseapp.com",
  projectId: "tiktok---jornada-8a439",
  storageBucket: "tiktok---jornada-8a439.appspot.com",
  messagingSenderId: "872511045539",
  appId: "1:872511045539:web:4045a2fcc37dc4f2aca416"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;