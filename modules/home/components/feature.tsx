import { View, Text } from "react-native";

interface IProps {
  title: string;
  icon: React.ReactNode;
}
export const Feature: React.FC<IProps> = ({ icon, title }) => (
  <View className="flex gap-4 items-center sm:w-1/4 border-r-2">
    <View className="bg-white rounded-md p-2">{icon}</View>
    <Text className="font-bold text-xl">{title}</Text>
  </View>
);
