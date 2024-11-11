import React, { useState } from "react";
import { useProductState } from "../../product/context";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { fileSvc } from "@/file";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import { IProductImage } from "@/modules/product/model";
import { AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

export const SearchByImage = () => {
  const router = useRouter();
  const { getProductsByImage } = useProductState();
  const [image, setImage] = useState<Partial<IProductImage>>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const fileUri = result.assets[0].uri;
      try {
        const manipulatedImage = await ImageManipulator.manipulateAsync(
          fileUri,
          [{ resize: { width: 800 } }],
          { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
        );

        const fileBase64 = await FileSystem.readAsStringAsync(
          manipulatedImage.uri,
          {
            encoding: FileSystem.EncodingType.Base64,
          }
        );
        const dataUri = `data:image/jpeg;base64,${fileBase64}`;
        setImage({
          uri: dataUri,
          name: result.assets[0].fileName as string,
          type: result.assets[0].mimeType,
        });

        await handleImageUpload(image as IProductImage);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  const handleImageUpload = async (image: IProductImage) => {
    getProductsByImage(image as IProductImage).then((res) => {
      if (res?.length > 0) {
        router.push({
          pathname: "/product",
          params: { products: JSON.stringify(res) },
        });
      }
    });
  };

  return (
    <View className="w-[90%] bg-gray-100 p-4 rounded-lg shadow-sm items-center self-center -mt-2">
      <TouchableOpacity
        className="mt-4 p-4 border-2 border-primary rounded-lg items-center w-[80%]"
        onPress={pickImage}
      >
        <AntDesign name="camera" size={40} color="#2158E8" />
        <Text className="mt-2 text-primary font-sans">
          Search Product Image
        </Text>
      </TouchableOpacity>
    </View>
  );
};
