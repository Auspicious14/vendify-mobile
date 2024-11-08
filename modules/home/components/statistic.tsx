import { Text, View } from "react-native";

interface IProps {
  label: string;
  value: string | number;
}

export const Statistic: React.FC<IProps> = ({ label, value }) => (
  <View>
    <Text className="text-2xl font-bold text-primary">{value}</Text>
    <Text className="text-gray-500">{label}</Text>
  </View>
);
