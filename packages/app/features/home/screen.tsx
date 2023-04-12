import { Link } from "solito/link";
import { Button } from "../../design/button";
import { Text } from "../../design/typography";
import { View } from "../../design/view";

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mx-auto pb-2 text-5xl font-bold text-white">
        Create <Text className="text-[#cc66ff]">T3</Text> Turbo
      </Text>
      <Link href="/solito">
        <View className="rounded-lg border-2 border-gray-500 bg-slate-400 p-4">
          <Button title="Go Solito" />
        </View>
      </Link>
    </View>
  );
}
