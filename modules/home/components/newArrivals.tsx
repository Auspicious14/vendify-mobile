import React, { useEffect } from "react";

import { IProduct } from "../../product/model";
import { useProductState } from "../../product/context";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { helper } from "@/helper";

export const NewArrivals = () => {
  const { newArrivals, getNewArrivals, loading } = useProductState();

  return (
    <>
      {loading && (
        <></>
        // <Spin size="large" className="flex justify-center items-center" />
      )}
      <FlatList
        data={newArrivals}
        numColumns={2}
        keyExtractor={(item) => item?._id.toString()}
        renderItem={({ item }) => (
          <Link href={`/products/${item?._id}`} className="">
            <View
              style={{
                backgroundColor: "#FFF",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: item?.images[0].uri }}
                style={{ width: "100%", height: 200 }}
              />
              <View style={{ padding: 8 }}>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                <Text style={{ color: "#333" }}>${item.price}</Text>
              </View>
            </View>
          </Link>
        )}
      />
    </>
  );
};
