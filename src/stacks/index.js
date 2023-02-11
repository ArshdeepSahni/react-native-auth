import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import Home from "../screens/Home";
import LoginModal from "../screens/LoginModal";
const Stack = createStackNavigator();
const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginModal"
          component={LoginModal}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Index;
