import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const screenWidth = Dimensions.get("window").width;

const items = [
  {
    image: require("../../../assets/images/banner1 (1).jpeg"),
  },
  {
    image: require("../../../assets/images/banner1 (2).jpeg"),
  },
  {
    image: require("../../../assets/images/banner1 (3).jpeg"),
  },
];

export const HomeCarousel = () => {
  return (
    <View className="h-40 my-4 mb-10">
      <Carousel
        loop
        autoPlay
        width={screenWidth}
        height={screenWidth / 2}
        scrollAnimationDuration={1000}
        data={items}
        renderItem={({ item, index }) => (
          <View key={index} className="w-full h-full">
            <Image
              source={item.image}
              width={screenWidth}
              height={400}
              className="w-full h-full rounded-2xl"
            />
          </View>
        )}
      >
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
      </Carousel>
    </View>
  );
};
