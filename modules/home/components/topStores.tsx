import React from "react";
import { useStoreState } from "@/modules/stores/context";
import { IStore } from "@/modules/stores/model";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export const TopStores = () => {
  const { stores } = useStoreState();

  return (
    <View className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 align-middle">
      {stores?.map((store: IStore) => (
        <View key={store?._id}>
          <View className="bg-white shadow-md rounded-md transition-transform hover:shadow-lg hover:scale-105 flex flex-col justify-between h-full">
            <View>
              <Link href={`/stores/${store?._id}/products`} className="">
                <View className="group relative">
                  <View className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-52">
                    <Image
                      src={store?.images[0]?.uri}
                      alt={store?.images[0]?.name || "Store Image"}
                      className="h-full w-full object-cover object-center"
                    />
                  </View>
                  <View className="mt-4 mx-4 text-left mb-2">
                    {/* Store Name */}
                    <Text className="text-gray-700 text-sm font-bold line-clamp-2 overflow-hidden">
                      {store?.storeName}
                    </Text>
                  </View>
                </View>
              </Link>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
