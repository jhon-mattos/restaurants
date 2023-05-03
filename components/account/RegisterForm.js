import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(defaultFormValues);
  const [formData, setFormData] = useState();

  const defaultFormValues = () => {
    return { email: "", password: "", confirm: "" };
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.form}>
      <Input
        placeholder="Ingresa tu email..."
        containerStyle={styles.input}
        onChange={(e) => onChange(e, "email")}
        keyboardType="email-address"
      />
      <Input
        placeholder="Ingresa tu contraseña..."
        containerStyle={styles.input}
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Confirma tu contraseña..."
        containerStyle={styles.input}
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "confirm")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Registrar Nuevo Usuario"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => console.log(formData)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },

  input: {
    width: "100%",
  },

  btnContainer: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },

  btn: {
    backgroundColor: "#442484",
  },

  icon: {
    color: "#c1c1c1",
  },
});
