import { useCategorystate } from "@/modules/category/context";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";

export const Category = () => {
  const { categories, getCategories } = useCategorystate();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View className="grid gap-4 md:grid-cols-6 grid-cols-3 align-middle">
      {categories?.map((c) => (
        <View key={c?._id} className="w-full h-full">
          <View className=" md:w-auto w-full rounded-md transition-transform hover:shadow-lg hover:scale-105 flex flex-col justify-between h-full">
            <View>
              <Link href={`/collections/${c?.slug}`} className="">
                <View className="group relative">
                  <View className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-52">
                    <Image
                      // key={c?.images[0]?._id}
                      src={c?.images[0]?.uri}
                      alt={c?.images[0]?.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </View>
                  <View className="mt-4 mx-4">
                    <Text className="text-gray-700 text-sm font-bold line-clamp-2 max-h-12 overflow-hidden">
                      {c?.name}
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

{
  /* <View className="grid gap-4 sm:grid-cols-3 grid-cols-2">
      {categories?.map((c) => (
        <View key={c?._id} className="relative">
          {!!c?.images?.length && (
            <ApImage
              src={c?.images[0]?.uri}
              className="w-full h-60 object-cover rounded-lg"
              alt={c?.images[0]?.name}
            />
          )}
          <Button
            href={`/products`}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border-none font-bold px-4 py-2 text-black"
          >
            {c?.name}
          </Button>
        </View>
      ))}
    </View> */
}
