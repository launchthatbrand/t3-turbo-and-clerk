import { TextLink } from "solito/link";
import { View } from "../../design/view";

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <TextLink href="/solito">👈 Go Solito</TextLink>
    </View>
  );
}
