import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function Loading({ style, color = "#000000", size = "large" }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}
