import { Dimensions, ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Colors } from "../constants/color";
import MainButton from "./MainButton";
import FavoriteIconButton from "./FavoriteIconButton";
import { useCart } from "../contexts/CartProvider";
import { useFavorites } from "../contexts/FavoritesProvider";

const WIDTH = Dimensions.get("window").width;

const ProductListItem = ({ product }) => {
  const navigation = useNavigation();

  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <Pressable
      style={({ pressed }) => [pressed && { opacity: 0.9 }, styles.container]}
      onPress={() => {
        navigation.navigate("Details", { product: product });
      }}
    >
      <ImageBackground source={{ uri: product.image }} style={styles.image}>
        <FavoriteIconButton onPress={() => toggleFavorite(product)} isFavorite={isFavorite} />
      </ImageBackground>

      <Text style={[styles.texts, styles.price]}>{product.price} ₺</Text>
      <Text style={[styles.texts, styles.name]}>{product.name}</Text>
      <MainButton
        title={"Add to Cart"}
        onPress={() => {
          addToCart(product);
        }}
      />
    </Pressable>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 4,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    height: WIDTH / 3 - 20,
    aspectRatio: 4 / 3,
    borderRadius: 4,
  },
  texts: { fontWeight: "500", fontSize: 14 },
  price: { color: Colors.main },
  star: { position: "absolute", right: 0 },
});
