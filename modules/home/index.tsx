import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
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
      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          className="flex-1"
        >
          <View className="flex-1 relative mb-0">
            <HomeCarousel />
            <View className="absolute top-[07%] left-0 right-0 px-4 items-center">
              <Text className="text-2xl text-offWhite text-center font-sans">
                Discover thousands of products from multiple vendors
              </Text>
              <Text className="text-offWhite text-center mt-2 font-sans">
                Explore a vast collection of products across various categories
                from trusted sellers.
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
