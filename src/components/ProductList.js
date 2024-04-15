import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductListItem from "./ProductListItem";

const ProductList = ({ products, onEndReached }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={styles.container}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: { gap: 20, alignItems: "center" },
});
