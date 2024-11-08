import { useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const newArrivalsRef = useRef<HTMLDivElement | null>(null);
  const [sidebarTop, setSidebarTop] = useState(0);

  // Calculate sidebar top offset
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (newArrivalsRef.current) {
  //       const offsetTop =
  //         newArrivalsRef.current.getBoundingClientRect().top + window.scrollY;
  //       setSidebarTop(offsetTop);
  //     }
  //   };

  //   // Set initial position
  //   handleResize();
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", paddingVertical: 16 }}>
        {/* Carousel Banner */}
        <HomeCarousel />

        {/* Main Content */}

        {/* Search by Image and Category Sidebar */}
        <SearchByImage />
        {/* <CategorySidebar /> */}

        {/* Product Sections */}
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
    </View>
  );
};
