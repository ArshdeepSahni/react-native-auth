import React from "react";
import { Actionsheet } from "native-base";
import LoginModal from "../screens/LoginModal";
import { LinearGradient } from "expo-linear-gradient";
import AuthForm from "./AuthForm";
import { Dimensions } from "react-native";
const AuthActionSheet = ({ isOpen, onClose, authType }) => {
  const screenWidth = Dimensions.get("screen").width;
  return (
    <Actionsheet isOpen={isOpen} p={0}>
      <Actionsheet.Content
        style={{
          position: "relative",
          height: authType === "login" ? 489 : 575,
          width: screenWidth,
          borderRadius: 16,
        }}
        p={0}
      >
        <LinearGradient
          colors={["#969696", "#343434"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{
            top: 0,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            width: screenWidth,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: authType === "login" ? 489 : 575,
            paddingTop: 4,
          }}
        >
          {/* <Actionsheet.Item>abc</Actionsheet.Item> */}
          <AuthForm
            authType={authType}
            style={{ borderRadius: 16, flex: 1, width: screenWidth - 4 }}
          />
        </LinearGradient>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
export default AuthActionSheet;
