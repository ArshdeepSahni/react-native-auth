import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Modal,
  HStack,
  VStack,
  Box,
  FormControl,
  Stack,
  Input,
  InputRightAddon,
  InputGroup,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Feather } from "@expo/vector-icons";
const AuthForm = ({ style, authType, action, changeAuth }) => {
  const screenWidth = Dimensions.get("screen").width;
  return (
    <KeyboardAvoidingView
      h="100%"
      w="100%"
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 40}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Modal.Content
        style={{
          backgroundColor: "#27292D",
          ...style,
        }}
        // my={0.5}
        py={10}
        px={3}
      >
        <VStack alignItems="center">
          <VStack alignItems="center" space={2}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color: "#6B6C70",
                textTransform: "uppercase",
              }}
            >
              {authType === "login" ? "Welcome Back" : "Sign Up"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Inter_600SemiBold",
                color: "#ffffff",
              }}
            >
              {authType === "login"
                ? "Log into your account"
                : "Create an account to continue"}
            </Text>
          </VStack>
          <VStack w="100%" alignItems="center" space={4} mt={34}>
            <Box width="100%" alignItems="center">
              <Box width="100%">
                <FormControl width="100%">
                  <Stack>
                    <HStack alignItems="center" mb={2.5}>
                      <FormControl.Label
                        _text={{
                          color: "#C5C7CA",
                          fontSize: 14,
                          fontFamily: "Inter_500Medium",
                        }}
                      >
                        {authType === "login" ? "Email or Username" : "Email"}
                      </FormControl.Label>
                    </HStack>
                    <Input
                      borderColor="#35373B"
                      borderWidth={1.5}
                      p={3}
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontFamily: "Inter_400Regular",
                      }}
                      width="100%"
                      placeholder={
                        authType === "login"
                          ? "Enter your email"
                          : "Enter your email"
                      }
                    />
                  </Stack>
                </FormControl>
              </Box>
            </Box>
            {authType !== "login" && (
              <Box width="100%" alignItems="center">
                <Box width="100%">
                  <FormControl width="100%">
                    <Stack>
                      <HStack alignItems="center" mb={2.5}>
                        <FormControl.Label
                          _text={{
                            color: "#C5C7CA",
                            fontSize: 14,
                            fontFamily: "Inter_500Medium",
                          }}
                        >
                          Username
                        </FormControl.Label>
                      </HStack>
                      <Input
                        borderColor="#35373B"
                        borderWidth={1.5}
                        p={3}
                        style={{
                          color: "#fff",
                          fontSize: 16,
                          fontFamily: "Inter_400Regular",
                        }}
                        width="100%"
                        placeholder="Choose a preferred username"
                      />
                    </Stack>
                  </FormControl>
                </Box>
              </Box>
            )}
            <Box width="100%" alignItems="center">
              <Box width="100%">
                <FormControl width="100%">
                  <Stack>
                    <HStack
                      width="100%"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={2.5}
                    >
                      <FormControl.Label
                        _text={{
                          color: "#C5C7CA",
                          fontSize: 14,
                          fontFamily: "Inter_500Medium",
                        }}
                      >
                        Password
                      </FormControl.Label>
                      <TouchableOpacity>
                        <Text
                          style={{
                            color: "#C5C7CA",
                            fontSize: 12,
                            fontFamily: "Inter_500Medium",
                          }}
                        >
                          Forgot password?
                        </Text>
                      </TouchableOpacity>
                    </HStack>
                    <InputGroup
                      width="100%"
                      borderWidth={1.5}
                      borderColor="#35373B"
                    >
                      <Input
                        borderWidth={0}
                        p={3}
                        style={{
                          color: "#fff",
                          fontSize: 16,
                          fontFamily: "Inter_400Regular",
                        }}
                        type="password"
                        width="85%"
                        placeholder={
                          authType === "login"
                            ? "Your supersafe password"
                            : "Choose a preferred password"
                        }
                      />
                      <InputRightAddon
                        borderWidth={0}
                        backgroundColor="transparent"
                        width="15%"
                        children={
                          <TouchableOpacity>
                            <Feather size={18} color="gray" name="eye" />
                          </TouchableOpacity>
                        }
                      />
                    </InputGroup>
                  </Stack>
                </FormControl>
              </Box>
            </Box>
          </VStack>
          <VStack mt={5} space={3.5} width="100%">
            <TouchableOpacity
              onPress={action}
              width="100%"
              style={{
                backgroundColor: "#4A96FF",
                paddingVertical: 12,
                borderRadius: 4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Inter_500Medium",
                  color: "#ffffff",
                }}
              >
                {authType === "login" ? "Login now" : "Continue"}
              </Text>
            </TouchableOpacity>
            <HStack space={1} alignItems="center">
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_500Medium",
                  color: "#7F8084",
                }}
              >
                {authType === "login"
                  ? "Not registered yet?"
                  : "Already have an account?"}
              </Text>
              <TouchableOpacity onPress={changeAuth}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Inter_500Medium",
                    color: "#C5C7CA",
                  }}
                >
                  {authType === "login ->" ? "Register" : "Login ->"}
                </Text>
              </TouchableOpacity>
            </HStack>
          </VStack>
        </VStack>
      </Modal.Content>
    </KeyboardAvoidingView>
  );
};
export default AuthForm;
