import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "red":
        return { ...state, red: state.red + action.payload };
      case "green":
        return { ...state, green: state.green + action.payload };
      case "blue":
        return { ...state, blue: state.blue + action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  // console.log("La valeur du rouge est" +red)
  // console.log("La valeur du bleu est" +blue)
  // console.log("La valeur du vert est" +green)
  const COLOR_INCREMENT = 20;
  //   const setColor = (color, change) => {
  //     switch (color) {
  //       case "red":
  //         red + change >= 255 || red + change < 0 ? null : setRed(red + change);
  //         break;
  //       case "green":
  //         green + change >= 255 || green + change < 0
  //           ? null
  //           : setGreen(green + change);
  //         break;
  //       case "blue":
  //         blue + change >= 255 || blue + change < 0
  //           ? null
  //           : setBlue(blue + change);
  //         break;
  //       default:
  //         break;
  //     }
  //   };
  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: "red", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "green", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};
export default SquareScreen;
