import React from "react";
import { Dimensions, View } from "react-native";
import { Modal } from "native-base";
import AuthForm from "../components/AuthForm";
import { LinearGradient } from "expo-linear-gradient";
const LoginModal = ({ navigation }) => {
  const screenWidth = Dimensions.get("screen").width;
  return (
    <View>
      <Modal style={{ backgroundColor: "#131319" }} isOpen size="xl" p={0}>
        <LinearGradient
          colors={["#969696", "#343434"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: screenWidth - 32,
            borderRadius: 8,
            paddingVertical: 2,
          }}
        >
          <AuthForm style={{ width: screenWidth - 36 }} />
        </LinearGradient>
      </Modal>
    </View>
  );
};
export default LoginModal;
