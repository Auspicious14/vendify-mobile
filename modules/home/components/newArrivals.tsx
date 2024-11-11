import React, { useEffect } from "react";
import { useProductState } from "../../product/context";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { ActivityIndicator } from "@ant-design/react-native";
import { Image } from "expo-image";

export const NewArrivals = () => {
  const { newArrivals, getNewArrivals, loading } = useProductState();

  useEffect(() => {
    getNewArrivals();
  }, []);

  return (
    <View className="p-4 bg-gray-100 flex-1">
      {loading && (
        <View className="flex justify-center items-center">
          <ActivityIndicator size="large" color="#2158E8" />
        </View>
      )}

      {!loading && newArrivals?.length > 0 && (
        <FlatList
          data={newArrivals}
          numColumns={2}
          keyExtractor={(item) => item?._id.toString()}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <View
              // href={{ pathname: "/product" }}
              className="bg-white rounded-lg overflow-hidden mb-4 w-[48%] shadow-md"
            >
              <Image
                source={{ uri: item?.images[0]?.uri }}
                className="w-full h-48"
                alt={item?.images[0]?.name}
                contentFit="cover"
                transition={1000}
              />

              <View className="p-3">
                <Text className=" font-sans text-xs font-semibold text-gray-800 truncate">
                  {item.name.length > 50
                    ? item.name
                    : `${item.name.substring(0, 50)}...`}
                </Text>
                <Text className="text-primary mt-1 font-sans font-normal">
                  ${item.price}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
