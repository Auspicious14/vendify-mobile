import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "index":
              iconName = "home";
              break;
            case "stores":
              iconName = "storefront";
              break;
            case "product":
              iconName = "pricetag";
              break;
            case "favorite":
              iconName = "heart";
              break;
            case "profile":
              iconName = "person";
              break;
            default:
              iconName = "home";
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2158E8",
        tabBarInactiveTintColor: "gray",
        fontStyle: 'font-sans'
      })}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      /> */}
      {/* <Tabs.Screen
        name="stores"
        options={{
          title: "Stores",
        }}
      /> */}
      {/* <Tabs.Screen
        name="product"
        options={{
          title: "Products",
        }}
      /> */}
      {/* <Tabs.Screen
        name="favorite"
        options={{
          title: "Wishlist",
        }}
      /> */}
      {/* <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      /> */}
    </Tabs>
  );
}
