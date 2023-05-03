import { firebaseApp } from "./firebase";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "firebase/firestore";

const db = getFirestore(firebaseApp);

export const isUserLogged = () => {
  let isLogged = false;
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      isLogged = true;
    }
  });

  return isLogged;
};

export const getCurrentUser = () => {
  const auth = getAuth();
  return auth.currentUser;
};

export const closeSession = () => {
  const auth = getAuth();
  return signOut(auth);
};

export const registerUser = async (email, password) => {
  const result = { statusResponse: true, error: null };
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    result.error = "Este correo ya ha sido registrado.";
  }
  return result;
};
