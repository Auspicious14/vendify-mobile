import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { SearchByImage } from "./components/imageSearch";
import { NewArrivals } from "./components/newArrivals";
import { TopStores } from "./components/topStores";
import { NewStores } from "./components/newStores";
import { HomeCarousel } from "./components/carousel";
import { Link } from "expo-router";
import { Image } from "expo-image";

export const HomeScreen = () => {
  const newArrivalsRef = useRef<HTMLDivElement | null>(null);

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
              <Link
                href={{ pathname: "/product" }}
                className="bg-primary border-none outline-none rounded-xl p-4 text-offWhite my-4"
              >
                <Text className="font-sans">Shop now</Text>
              </Link>
            </View>
          </View>
          <SearchByImage />
        </ScrollView>

        <Text className="text-xl text-center font-sans ">New Arrivals</Text>
        <NewArrivals />
        <Text className="text-xl text-center font-sans ">Top Stores</Text>
        <TopStores />
      </SafeAreaView>
    </>
  );
};
