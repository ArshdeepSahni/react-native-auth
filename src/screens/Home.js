import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AuthActionSheet from "../components/AuthActionSheet";
import {
  ScrollView,
  InputGroup,
  Input,
  InputLeftAddon,
  VStack,
  HStack,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import Post from "../components/Post";
import { COLORS } from "../constants/Theme";
const Home = ({ navigation }) => {
  const [loginSheet, setLoginSheet] = useState(false);
  const [signupSheet, setSignupSheet] = useState(false);
  return (
    <View style={{ backgroundColor: COLORS.PRIMARY, height: "100%" }}>
      <ScrollView px={4} pt={36}>
        <VStack mb={8} space={3}>
          <Text
            style={{
              color: "#C5C7CA",
              fontFamily: "Inter_500Medium",
              fontSize: 28,
            }}
          >
            Hello Jane
          </Text>
          <Text
            style={{
              color: "#7F8084",
              fontFamily: "Inter_400Regular",
              fontSize: 16,
            }}
          >
            How are you doing today? Would you like to share something with the
            community 🤗
          </Text>
        </VStack>
        <TouchableOpacity
          onPress={() => setSignupSheet(true)}
          style={{
            borderWidth: 2,
            borderColor: "#35373B",
            width: "100%",
            borderRadius: 8,
            backgroundColor: COLORS.LIGHT_GRAY,
            paddingHorizontal: 12,
            paddingVertical: 24,
          }}
        >
          <VStack space={3}>
            <Text
              style={{
                color: "#C5C7CA",
                fontSize: 18,
                fontFamily: "Inter_500Medium",
              }}
            >
              Create post
            </Text>
            <InputGroup
              backgroundColor="#191920"
              width="100%"
              height={54}
              justifyContent="center"
              py={2.5}
              px={3}
              borderWidth={0}
              borderRadius={8}
            >
              <InputLeftAddon
                backgroundColor="transparent"
                borderWidth={0}
                width="15%"
                children={
                  <TouchableOpacity
                    onPress={() => setSignupSheet(true)}
                    style={{
                      backgroundColor: COLORS.LIGHT_GRAY,
                      width: 34,
                      height: 34,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>💬</Text>
                  </TouchableOpacity>
                }
              />
              <Input
                borderWidth={0}
                p={3}
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "Inter_400Regular",
                }}
                width="85%"
                placeholder="How are you feeling today?"
              />
            </InputGroup>
            <TouchableOpacity
              onPress={() => setSignupSheet(true)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 28,
                backgroundColor: COLORS.CTA,
                borderRadius: 4,
                width: 87,
                alignSelf: "flex-end",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "Inter_500Medium",
                }}
              >
                Post
              </Text>
            </TouchableOpacity>
          </VStack>
        </TouchableOpacity>
        <Post
          action={() => setSignupSheet(true)}
          user={{ name: "Theresa Webb", emoji: "👋", comments: 24 }}
          time="5mins ago"
          post="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet."
        />
        <Post
          action={() => setSignupSheet(true)}
          isEdited
          user={{ name: "Marvin McKinney", emoji: "😞", comments: 24 }}
          time="8mins ago"
          post="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet."
        />
        <View style={{ height: 40, width: "100%" }}></View>
      </ScrollView>
      <AuthActionSheet
        authType="login"
        isOpen={loginSheet}
        onClose={() => setLoginSheet(false)}
        action={() => setLoginSheet(false)}
        changeAuth={() => {
          setLoginSheet(false);
          setSignupSheet(true);
        }}
      />
      <AuthActionSheet
        authType="signup"
        isOpen={signupSheet}
        onClose={() => setSignupSheet(false)}
        action={() => setSignupSheet(false)}
        changeAuth={() => {
          setSignupSheet(false);
          setLoginSheet(true);
        }}
      />
    </View>
  );
};
export default Home;
