import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import FavoriteIconButton from "./FavoriteIconButton";
import { useFavorites } from "../contexts/FavoritesProvider";
import { Colors } from "../constants/color";

const { width: WIDTH } = Dimensions.get("window");

const FavoriteListItem = ({ item }) => {
  const { toggleFavorite } = useFavorites();
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: item.image }} style={styles.image}>
        <FavoriteIconButton iconSize={40} onPress={() => toggleFavorite(item)} isFavorite />
      </ImageBackground>
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </View>
  );
};

export default FavoriteListItem;

const styles = StyleSheet.create({
  container: { padding: 20 },
  innerContainer: {
    paddingVertical: 10,
    backgroundColor: Colors.main,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: WIDTH - 40,
    aspectRatio: 4 / 3,
  },
  name: { color: "white", fontSize: 22, fontWeight: "500" },
});
