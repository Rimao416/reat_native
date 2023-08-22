import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

const ImageDetails = ({title,imageSource}) => {
  return (
    <View>
    <Image source={imageSource} />
      <Text>{title}</Text>
    </View>
  );
};
export default ImageDetails;
