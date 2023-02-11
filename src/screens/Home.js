import React, { useState } from "react";
import { Text, View } from "react-native";
import AuthActionSheet from "../components/AuthActionSheet";
const Home = ({ navigation }) => {
  const [loginSheet, setLoginSheet] = useState(false);
  const [signupSheet, setSignupSheet] = useState(false);
  return (
    <View>
      <Text>Home</Text>
      <AuthActionSheet authType="login" isOpen={loginSheet} />
      <AuthActionSheet authType="signup" isOpen={signupSheet} />
    </View>
  );
};
export default Home;
