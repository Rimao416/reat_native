import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

const ComponentsScreen = () => {
  return (
    <View>
      <Text styles={styles.textStyle}>Components Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
