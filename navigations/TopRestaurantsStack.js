import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import TopRestaurants from "../screens/TopRestaurants";

const Stack = createStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-restaurants"
        component={TopRestaurants}
        options={{ title: "Los mejores Restaurantes" }}
      />
    </Stack.Navigator>
  );
}
