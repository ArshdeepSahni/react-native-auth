import React from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
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
import AuthActionSheet from "../components/AuthActionSheet";
const LoginModal = ({ navigation }) => {
  const screenWidth = Dimensions.get("screen").width;
  return (
    <View>
      <Modal style={{ backgroundColor: "#131319" }} isOpen size="xl" p={0}>
        <KeyboardAvoidingView
          h="100%"
          keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 40}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
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
            }}
          >
            <Modal.Content
              style={{
                backgroundColor: "#27292D",
                width: screenWidth - 36,
                borderRadius: 8,
              }}
              my={0.5}
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
                    Welcome Back
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Inter_600SemiBold",
                      color: "#ffffff",
                    }}
                  >
                    Log into your account
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
                              Email or Username
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
                            placeholder="Enter your email"
                          />
                        </Stack>
                      </FormControl>
                    </Box>
                  </Box>
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
                              placeholder="Your supersafe password"
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
                      Login now
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
                      Not registered yet?
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Inter_500Medium",
                          color: "#C5C7CA",
                        }}
                      >
                        Register
                      </Text>
                    </TouchableOpacity>
                  </HStack>
                </VStack>
              </VStack>
            </Modal.Content>
          </LinearGradient>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};
export default LoginModal;
