import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFavorites } from "../contexts/FavoritesProvider";
import FavoriteListItem from "../components/FavoriteListItem";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  if (favorites.length == 0) {
    return <Text>No favorite product added yet...</Text>;
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FavoriteListItem item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Favorites;

const styles = StyleSheet.create({});
