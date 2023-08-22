import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  const myName = "Omari";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with react native</Text>
      <Text style={styles.secondStyle}> My Name is {myName}</Text>
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
