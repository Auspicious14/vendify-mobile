import React from "react";
import { useProductState } from "../../product/context";
import { Text } from "react-native";
import { useRouter } from "expo-router";
import { fileSvc } from "@/file";

export const SearchByImage = () => {
  const router = useRouter();
  const { getProductsByImage } = useProductState();

  const handleImageUpload = async (file: any) => {
    const { name, type }: any = file;

    const uri = await fileSvc.fileToBase64(file.originFileObj as any);

    getProductsByImage({ name, uri, type }).then((res) => {
      if (res?.length > 0) {
        router.push({
          pathname: "/products",
          params: { products: JSON.stringify(res) },
        });
      }
    });
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <Text className="text-xl font-bold text-center mb-2">
        Search Products by Image
      </Text>
      {/* <Dragger
        multiple={false}
        onChange={(e) => {
          handleImageUpload(e.file);
        }}
        accept="image/png, image/jpeg, image/webp"
        // onDrop={(e) => console.log(e.dataTransfer.files, "droped files")}
      >
        <Text className="ant-upload-drag-icon">
          <InboxOutlined />
        </Text>
        <Text className="ant-upload-text">
          Click or drag file to this area to upload
        </Text>
        <Text className="ant-upload-hint">
          Support for a single upload. Strictly prohibited from uploading
          company data or other banned files.
        </Text>
      </Dragger> */}
    </div>
  );
};
