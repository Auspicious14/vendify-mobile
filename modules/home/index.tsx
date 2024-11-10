import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SearchByImage } from "./components/imageSearch";
import { NewArrivals } from "./components/newArrivals";
import { TopStores } from "./components/topStores";
import { NewStores } from "./components/newStores";
import { HomeCarousel } from "./components/carousel";

export const HomeScreen = () => {
  const newArrivalsRef = useRef<HTMLDivElement | null>(null);
  const [sidebarTop, setSidebarTop] = useState(0);

  return (
    <>
      <View className="relative flex-1">
        <HomeCarousel />
        <View className="flex justify-center items-center text-center flex-col p-4 gap-4 absolute top-2">
          <Text className="text-3xl text-offWhite text-center">
            Discover thousands of products from multiple vendors
          </Text>
          <Text className="text-offWhite text-center">
            Explore a vast collection of products across various categories from
            trusted sellers. Shop with confidence and find exactly what you
            need, all in one place.
          </Text>
        </View>
      </View>
      <View>
        <SearchByImage />

        <View ref={newArrivalsRef as any}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              backgroundColor: "#3498db",
              color: "#FFF",
              textAlign: "center",
              paddingVertical: 8,
            }}
          >
            New Arrivals
          </Text>
          <NewArrivals />
        </View>

        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              backgroundColor: "#3498db",
              color: "#FFF",
              textAlign: "center",
              paddingVertical: 8,
            }}
          >
            Best-Selling Stores
          </Text>
          <TopStores />
        </View>

        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              backgroundColor: "#3498db",
              color: "#FFF",
              textAlign: "center",
              paddingVertical: 8,
            }}
          >
            New Stores
          </Text>
          <NewStores />
        </View>
      </View>
    </>
  );
};
