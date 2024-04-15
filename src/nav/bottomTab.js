import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import { Colors } from "../constants/color";
import ProductStack from "./productStack";
import { useCart } from "../contexts/CartProvider";

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  const { cart } = useCart();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.main,
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        headerStyle: { backgroundColor: Colors.main },
        headerTintColor: "white",
      }}
    >
      <BottomTab.Screen
        name="ProductStack"
        component={ProductStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
          ),
          tabBarBadge:
            cart.length > 0 ? cart.reduce((total, item) => total + item.quantity, 0) : null,
          tabBarBadgeStyle: { backgroundColor: "red" },
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          //   tabBarStyle: { backgroundColor: Colors.blue200 },
          //   headerStyle: { backgroundColor: Colors.blue200 },
          //   headerTitleStyle: { color: "white" },
          //   headerBackTitleStyle: { color: "white" },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="user" color={color} size={size} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
