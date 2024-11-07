import React from "react";
import { Image, Text, View } from "react-native";
import { Link } from "expo-router";
import { useStoreState } from "@/modules/stores/context";
import { IStore } from "@/modules/stores/model";

export const NewStores = () => {
  const { newStores } = useStoreState();

  return (
    <View className=" grid gap-4 xl:lg:md:grid-cols-4 sm:grid-cols-3 grid-cols-2 align-middle">
      {newStores?.map((store: IStore) => (
        <View key={store?._id}>
          <View className="bg-white md:w-auto w-full shadow-md rounded-md transition-transform hover:shadow-lg hover:scale-105 flex flex-col justify-between h-full">
            <View>
              <Link href={`stores/${store?._id}/products`} className="">
                <View className="group relative">
                  <View className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-52">
                    <Image
                      //   key={store?.images[0]?._id}
                      src={store?.images[0]?.uri}
                      alt={store?.images[0]?.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </View>
                  <View className="mt-4 mx-4 text-left mb-2">
                    {/* Product Name */}
                    <Text className="text-gray-700 text-sm font-bold line-clamp-2 max-h-12 overflow-hidden">
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
