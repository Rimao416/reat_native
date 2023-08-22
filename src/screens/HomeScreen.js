import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const myName = "Omari";
  const handlePress = () => {
    console.log("Le bouton a été appuyé !");
  };
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with react native</Text>
      <Button onPress={() => console.log(myName)} title="Click Me"></Button>
      <TouchableOpacity onPress={handlePress}>
        <Text>Go to The List demo</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  secondStyle: {
    fontSize: 20,
  },
});

export default HomeScreen;
