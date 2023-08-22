import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  const myName = "Omari";
  const handlePress = () => {
    navigation.navigate("Image");
  };
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with react native</Text>
      <Button onPress={() => console.log(myName)} title="Click Me"></Button>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.secondStyle}>Go to The Image demo</Text>
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
    color: "red",
  },
});

export default HomeScreen;
