import React, { useState } from "react";
import { useProductState } from "../../product/context";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { fileSvc } from "@/file";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import { IProductImage } from "@/modules/product/model";
import { AntDesign } from "@expo/vector-icons";

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
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  const handleImageUpload = async (file: any) => {
    const { name, type }: any = file;

    const uri = await fileSvc.fileToBase64(file.originFileObj as any);

    getProductsByImage({ name, uri, type }).then((res) => {
      if (res?.length > 0) {
        router.push({
          pathname: "/product",
          params: { products: JSON.stringify(res) },
        });
      }
    });
  };

  return (
    <View className="w-full bg-white p-4 rounded-lg">
      <Text className="text-xl font-bold text-center mb-2">
        Search Products by Image
      </Text>
      {!image && (
        <TouchableOpacity
          className="flex justify-center items-center p-4 border border-spacing-4 rounded-md m-auto"
          onPress={() => pickImage()}
        >
          <AntDesign name="plus" size={40} />
          <Text>Upload Image</Text>
        </TouchableOpacity>
      )}
      {image && (
        <TouchableOpacity onPress={() => pickImage()}>
          <Image
            source={{
              uri: image?.uri,
              height: 200,
            }}
            alt={image?.name as string}
            className="rounded-md m-auto mt-6"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
