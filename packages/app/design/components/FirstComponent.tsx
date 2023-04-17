import { Text } from "../../design/typography";
import { View } from "../../design/view";

export function FirstComponent() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mx-auto pb-2 text-5xl font-bold text-white">
        FirstComponent
      </Text>
    </View>
  );
}
