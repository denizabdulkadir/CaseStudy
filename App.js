import "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./src/nav/bottomTab";
import { CartProvider } from "./src/contexts/CartProvider";
import { FavoritesProvider } from "./src/contexts/FavoritesProvider";

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <FavoritesProvider>
          <BottomNavigator />
        </FavoritesProvider>
      </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
