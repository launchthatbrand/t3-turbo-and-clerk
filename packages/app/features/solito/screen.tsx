import { TextLink } from "solito/link";
import { View } from "../../design/view";

export function SolitoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  );
}
