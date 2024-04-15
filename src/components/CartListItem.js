import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Colors } from "../constants/color";
import IconButton from "./IconButton";
import { useCart } from "../contexts/CartProvider";

const CartListItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = item?.price * item?.quantity ?? 0;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
        <Text style={styles.price}>{totalPrice} ₺</Text>
      </View>
      <View style={styles.leftContainer}>
        <IconButton iconName={"minus"} onPress={() => decreaseQuantity(item.id)} />
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>{item.quantity}</Text>
        </View>
        <IconButton iconName={"plus"} onPress={() => increaseQuantity(item.id)} />
      </View>
    </View>
  );
};

export default CartListItem;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  name: { fontSize: 18 },
  price: { color: Colors.main, fontWeight: "600" },
  quantity: {
    width: 45,
    height: 35,
    backgroundColor: Colors.main,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: { color: "white", fontSize: 20 },
});
