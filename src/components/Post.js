import React from "react";
import {
  VStack,
  HStack,
  Input,
  InputLeftAddon,
  InputGroup,
  Image,
} from "native-base";
import { Feather, Octicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { COLORS } from "../constants/Theme";
import { HOME_STYLES } from "../styles/Home";
const Post = ({ user, time, isEdited, post, action }) => {
  return (
    <TouchableOpacity onPress={action} style={HOME_STYLES.post}>
      <VStack space={3}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack space={3} alignItems="center">
            <Image
              width={10}
              height={10}
              source={require("../../assets/avatar.png")}
              alt=""
            />
            <VStack>
              <Text
                style={{
                  color: "#C5C7CA",
                  fontSize: 16,
                  fontFamily: "Inter_500Medium",
                }}
              >
                {user?.name}
              </Text>
              <Text
                style={{
                  color: "#7F8084",
                  fontSize: 14,
                  fontFamily: "Inter_500Medium",
                }}
              >
                {time} {isEdited && "• Edited"}
              </Text>
            </VStack>
          </HStack>
          <TouchableOpacity onPress={action}>
            <Feather name="more-horizontal" size={20} color="#C5C7CA" />
          </TouchableOpacity>
        </HStack>
        <HStack
          style={{
            paddingHorizontal: 12,
            paddingVertical: 22,
            backgroundColor: "#191920",
            borderRadius: 8,
          }}
          space={3}
        >
          <View
            style={{
              backgroundColor: COLORS.LIGHT_GRAY,
              width: 34,
              height: 34,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{user?.emoji}</Text>
          </View>
          <Text
            style={{
              maxWidth: Dimensions.get("screen").width - 130,
              color: "#7F8084",
              fontSize: 14,
              fontFamily: "Inter_400Regular",
            }}
          >
            {post}
          </Text>
        </HStack>
        <TouchableOpacity onPress={action} style={{}}>
          <HStack space={2} alignItems="center">
            <Feather name="message-square" size={20} color="#C5C7CA" />
            <Text
              style={{
                color: "#7F8084",
                fontSize: 14,
                fontFamily: "Inter_500Medium",
              }}
            >
              {user.comments} {user.comments > 1 ? "comments" : "comment"}
            </Text>
          </HStack>
        </TouchableOpacity>
      </VStack>
    </TouchableOpacity>
  );
};
export default Post;
