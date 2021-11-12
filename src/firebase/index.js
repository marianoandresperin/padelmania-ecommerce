import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWXp7v0YeIrJRebbEsNxOCybRxmcD2I_I",
  authDomain: "padelmania-ecommerce.firebaseapp.com",
  projectId: "padelmania-ecommerce",
  storageBucket: "padelmania-ecommerce.appspot.com",
  messagingSenderId: "837730250232",
  appId: "1:837730250232:web:c72d877e17884e88d3fa0d"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
