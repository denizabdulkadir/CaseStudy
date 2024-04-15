import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/color";

const FavoriteIconButton = ({ iconSize = 30, onPress, isFavorite }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && { opacity: 0.9 }, styles.container]}
    >
      {isFavorite ? (
        <MaterialCommunityIcons style={styles.star} name="star" color={"yellow"} size={iconSize} />
      ) : (
        <MaterialCommunityIcons
          style={styles.star}
          name="star-outline"
          color={Colors.grey}
          size={iconSize}
        />
      )}
    </Pressable>
  );
};

export default FavoriteIconButton;

const styles = StyleSheet.create({ container: { position: "absolute", right: 5, top: 5 } });
