import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useCart } from "../contexts/CartProvider";
import CartListItem from "../components/CartListItem";
import { Colors } from "../constants/color";
import MainButton from "../components/MainButton";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

const Cart = () => {
  const { cart, calculateTotal } = useCart();

  const totalPrice = calculateTotal();

  if (cart.length === 0) {
    return <Text>no products added to cart yet</Text>;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={cart}
        key={(item) => item.id}
        renderItem={({ item }) => <CartListItem key={item.id} item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
      <View style={styles.bottom}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.priceText]}>Total:</Text>
          <View />
          <Text style={[styles.price]}>{totalPrice} ₺</Text>
        </View>
        <View style={{ flex: 1 }}>
          <MainButton title={"Complete"} />
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  content: { gap: 10 },
  priceText: { color: Colors.main, fontSize: 22 },
  price: { fontSize: 20, fontWeight: "600" },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    paddingLeft: 20,
    paddingBottom: 20,
  },
});
