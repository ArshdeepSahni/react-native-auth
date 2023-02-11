import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { Modal } from "native-base";
import AuthForm from "../components/AuthForm";
import { LinearGradient } from "expo-linear-gradient";
import { SCREENS } from "../constants/Screens";
import { COLORS } from "../constants/Theme";
const LoginModal = ({ navigation, route }) => {
  const screenWidth = Dimensions.get("screen").width;
  const [authType, setAuthType] = useState("login");
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(
    () =>
      navigation.addListener("focus", (e) => {
        setIsModalOpen(true);
      }),
    [navigation]
  );
  return (
    <View
      style={{ backgroundColor: COLORS.PRIMARY, height: "100%", width: "100%" }}
    >
      <Modal
        style={{ backgroundColor: COLORS.PRIMARY }}
        isOpen={isModalOpen}
        size="xl"
        p={0}
      >
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
          <AuthForm
            authType={authType}
            changeAuth={() =>
              setAuthType((state) => (state === "login" ? "signup" : "login"))
            }
            action={() => {
              setIsModalOpen(false);
              navigation.navigate(SCREENS.HOME);
            }}
            style={{ width: screenWidth - 36 }}
          />
        </LinearGradient>
      </Modal>
    </View>
  );
};
export default LoginModal;
