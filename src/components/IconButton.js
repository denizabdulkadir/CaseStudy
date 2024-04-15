import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/color";

const IconButton = ({ iconName, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && { opacity: 0.6 }, styles.container]}
    >
      <MaterialCommunityIcons name={iconName} color={"dimgray"} size={24} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 35,
    backgroundColor: Colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
});
