import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import Colors from "../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.GALAXY_BLACK,
        },
        headerTintColor: Colors.TATOOINE_SAND,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: Colors.GALAXY_BLACK,
          borderTopColor: Colors.STAR_WARS_YELLOW,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: Colors.TATOOINE_SAND,
        tabBarInactiveTintColor: Colors.DURASTEEL_GREY,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          href: null,
        }}
      />

      <Tabs.Screen
        name="films"
        options={{
          title: "Films",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="film" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="people"
        options={{
          title: "People",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="user" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="heart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
