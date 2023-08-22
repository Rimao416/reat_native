import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  createAppContainer,
} from "@react-navigation/stack";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
ImageScreen;

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{ headerTitle: "Écran d'Accueil" }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="List"
        options={{ headerTitle: "Liste" }}
        component={ComponentsScreen}
      />
      <Stack.Screen
        name="Image"
        options={{ headerTitle: "Image" }}
        component={ImageScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
