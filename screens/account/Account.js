import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { getCurrentUser } from "../../utils/actions";
import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";
import Loading from "../../components/Loading";

export default function Account() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();

    user ? setLogin(true) : setLogin(false);
  }, []);

  // getAuth().onAuthStateChanged((user) => {
  //   user ? setLogin(true) : setLogin(false);
  // });

  if (login == null) {
    return <Loading isVisible={true} text="Cargando..." />;
  }

  return login ? <UserLogged /> : <UserGuest />;
}

const styles = StyleSheet.create({});
