import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { isUserLogged } from "../../utils/actions";
import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";

export default function Account() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setLogin(isUserLogged());
  }, []);

  if (login == null) {
    return <Text>Cargando...</Text>;
  }

  return login ? <UserLogged /> : <UserGuest />;
}

const styles = StyleSheet.create({});
