import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import FormInputs from "../components/form";

const Home = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const IngresarD = () => {
    if (user === "hacker@gmail.com" && password === "12345678") {
    }
  };

  return (
    <View style={styles.container}>
      <FormInputs title="Usuario" defaultValue={user} onChangeText={setUser} />
      <FormInputs
        title="Contraseña"
        defaultValue={password}
        onChangeText={setPassword}
      />

      <View style={styles.button}>
        <Button title="Ingresar" onPress={IngresarD} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#6ca0ab",
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 30,
    paddingTop: 150,
    paddingRight: 24,
    borderTopRightRadius: 30,
    paddingLeft: 24,
    
  },
  button: {
    paddingTop: 50,
  },
});
