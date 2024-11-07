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
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

const bannerImages = [
  { id: 1, uri: "../../assets/images/banner1 (1).jpeg", name: "banner1" },
  { id: 2, uri: "../../assets/images/banner1 (2).jpeg", name: "banner2" },
  { id: 3, uri: "../../assets/images/banner1 (3).jpeg", name: "banner3" },
  { id: 4, uri: "../../assets/images/banner1 (4).jpeg", name: "banner4" },
  { id: 5, uri: "../../assets/images/banner1 (5).jpeg", name: "banner5" },
];
export const HomeScreen = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const newArrivalsRef = useRef<HTMLDivElement | null>(null);
  const [sidebarTop, setSidebarTop] = useState(0);

  // Calculate sidebar top offset
  useEffect(() => {
    const handleResize = () => {
      if (newArrivalsRef.current) {
        const offsetTop =
          newArrivalsRef.current.getBoundingClientRect().top + window.scrollY;
        setSidebarTop(offsetTop);
      }
    };

    // Set initial position
    handleResize();

    // Recalculate on window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ alignItems: "center", paddingVertical: 16 }}>
        {/* Carousel Banner */}
        <Carousel
          data={bannerImages}
          renderItem={({ item }) => (
            <View style={{ position: "relative" }}>
              <Image
                source={require(item?.uri)}
                style={{ width, height: 400, resizeMode: "cover" }}
              />
              <View
                style={{
                  position: "absolute",
                  width,
                  height: 400,
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              />
            </View>
          )}
          sliderWidth={width}
          itemWidth={width}
          autoplay={true}
          loop={true}
        />

        {/* Main Content */}
        <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              color: "#FFF",
            }}
          >
            Discover Thousands of Products from Multiple Vendors
          </Text>
          <Text
            style={{
              marginVertical: 12,
              fontSize: 16,
              textAlign: "center",
              color: "#FFF",
            }}
          >
            Explore a vast collection of products across various categories from
            trusted sellers.
          </Text>
          <TouchableOpacity
            style={{ backgroundColor: "#FFF", padding: 12, borderRadius: 8 }}
          >
            <Text style={{ color: "#000", fontWeight: "bold" }}>
              Start Shopping
            </Text>
          </TouchableOpacity>
        </View>

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
    </ScrollView>
  );
};
