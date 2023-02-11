import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Theme";
export const HOME_STYLES = StyleSheet.create({
  post: {
    marginTop: 16,
    borderWidth: 2,
    borderColor: "#35373B",
    width: "100%",
    borderRadius: 8,
    backgroundColor: COLORS.LIGHT_GRAY,
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
});
