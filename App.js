import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import Loading from "./src/components/Loading";
import Index from "./src/stacks";
import { COLORS } from "./src/constants/Theme";
import { useEffect } from "react";
export default function App() {
  let [isFonts] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  if (!isFonts) {
    return <Loading />;
  }
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ backgroundColor: COLORS.PRIMARY, height: "100%" }}>
        <Index />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
