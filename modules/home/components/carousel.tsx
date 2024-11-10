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
    <>
      <Carousel
        loop
        autoPlay
        width={screenWidth}
        height={screenWidth / 2}
        scrollAnimationDuration={1000}
        data={items}
        renderItem={({ item, index }) => (
          <View key={index} className="w-full  bg-black opacity-90">
            <Image
              source={item.image}
              width={screenWidth}
              height={100}
              className="w-full h-60 rounded-2xl"
            />
          </View>
        )}
      ></Carousel>
    </>
  );
};
