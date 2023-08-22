import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>AIME MOI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,

  },
});
export default HomeScreen;
