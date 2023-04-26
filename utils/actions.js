import { firebaseApp } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "firebase/firestore";

const db = getFirestore(firebaseApp);

export const isUserLogged = () => {
  let isLogged = false;
  getAuth().onAuthStateChanged((user) => {
    user !== null && (isLogged = true);
  });
};