// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB43u5-frUOInuX2BQ23PP5Tj0BWd6dAw8",
  authDomain: "cadastro-produto-c4f53.firebaseapp.com",
  projectId: "cadastro-produto-c4f53",
  storageBucket: "cadastro-produto-c4f53.firebasestorage.app",
  messagingSenderId: "536226521924",
  appId: "1:536226521924:web:dc92e759c247b4bc4c2d11",
  measurementId: "G-9F45EJK46D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportando o DB
export const db = getFirestore(app)