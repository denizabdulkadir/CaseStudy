import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import React from "react";
import Home from "../screens/Home";
import Details from "../screens/Details";
import { Colors } from "../constants/color";

export default function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.main },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          title: "E-Market",
        }}
      />
      <Stack.Screen
        component={Details}
        name="Details"
        options={({ route }) => ({ title: route.params.product.name })}
      />
    </Stack.Navigator>
  );
}
