import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { SCREENS } from "../constants/Screens";
import Home from "../screens/Home";
import LoginModal from "../screens/LoginModal";
const Stack = createStackNavigator();
const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginModal">
        <Stack.Screen
          options={{ headerShown: false }}
          name={SCREENS.LOGIN_MODAL}
          component={LoginModal}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={SCREENS.HOME}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Index;
