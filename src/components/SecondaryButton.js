import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/color";

const SecondaryButton = ({ title, onPress, titleStyle }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && { opacity: 0.6 }, styles.container]}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.grey,
    alignItems: "center",
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
  },
});
