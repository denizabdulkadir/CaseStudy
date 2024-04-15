import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/color";

const MainButton = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && { opacity: 0.6 }, styles.container]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: Colors.main,
    alignItems: "center",
    borderRadius: 4,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
