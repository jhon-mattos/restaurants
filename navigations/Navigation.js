import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";
// import { Icon } from "react-native-elements/dist/icons/Icon";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case "restaurantsStack":
        iconName = "compass-outline";
        break;
      case "favoritesStack":
        iconName = "heart-outline";
        break;
      case "top-restaurantsStack":
        iconName = "star-outline";
        break;
      case "searchStack":
        iconName = "magnify";
        break;
      case "accountStack":
        iconName = "home-outline";
        break;
    }

    return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurantsStack"
        // screenOptions={{
        //   tabBarInactiveTintColor: "#442484",
        //   tabBarActiveTintColor: "#a17dc3",
        // }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarInactiveTintColor: "#a17dc3",
          tabBarActiveTintColor: "#442484",
        })}
      >
        <Tab.Screen
          name="restaurantsStack"
          component={RestaurantsStack}
          options={{ title: "Restaurantes", headerShown: false }}
        />
        <Tab.Screen
          name="favoritesStack"
          component={FavoritesStack}
          options={{ title: "Favoritos", headerShown: false }}
        />
        <Tab.Screen
          name="top-restaurantsStack"
          component={TopRestaurantsStack}
          options={{ title: "Top 5", headerShown: false }}
        />
        <Tab.Screen
          name="searchStack"
          component={SearchStack}
          options={{ title: "Buscar", headerShown: false }}
        />
        <Tab.Screen
          name="accountStack"
          component={AccountStack}
          options={{ title: "Cuenta", headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
