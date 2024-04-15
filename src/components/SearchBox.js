import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../constants/color";

const SearchBox = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={24} color={Colors.grey} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    gap: 5,
  },
  inputContainer: {
    gap: 5,
    flexDirection: "row",
    borderRadius: 4,
    backgroundColor: "ghostwhite",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: { fontSize: 16, width: "85%" },
});
