import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoOvz-YP8STIjSJAe9rTlmzxhJeu9yK40",
  authDomain: "restaurants-625c2.firebaseapp.com",
  projectId: "restaurants-625c2",
  storageBucket: "restaurants-625c2.appspot.com",
  messagingSenderId: "1017209616215",
  appId: "1:1017209616215:web:b231c6c1b6a3cca2893012",
};

export const firebaseApp = initializeApp(firebaseConfig);
