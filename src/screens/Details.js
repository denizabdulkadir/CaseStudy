import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

import MainButton from "../components/MainButton";
import { Colors } from "../constants/color";
import FavoriteIconButton from "../components/FavoriteIconButton";
import { ScrollView } from "react-native-gesture-handler";
import { useCart } from "../contexts/CartProvider";
import { useFavorites } from "../contexts/FavoritesProvider";

const { width: WIDTH } = Dimensions.get("window");

const Details = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: product.image }} style={styles.image}>
        <FavoriteIconButton
          iconSize={40}
          onPress={() => toggleFavorite(product)}
          isFavorite={isFavorite}
        />
      </ImageBackground>
      <Text style={[styles.name]}>{product.name}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[]}>{product.description}</Text>
      </ScrollView>
      <View style={styles.bottom}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.priceText]}>Price:</Text>
          <View />
          <Text style={[styles.price]}>{product.price} ₺</Text>
        </View>
        <View style={{ flex: 1 }}>
          <MainButton title={"Add to Cart"} onPress={() => addToCart(product)} />
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 10 },
  image: {
    width: WIDTH - 40,
    aspectRatio: 4 / 3,
  },

  priceText: { color: Colors.main, fontSize: 22 },
  price: { fontSize: 20, fontWeight: "600" },
  name: { fontWeight: "500", fontSize: 22 },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
  },
});
