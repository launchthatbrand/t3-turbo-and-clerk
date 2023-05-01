import { CardStats } from "@acme/app/design/components/Cards/CardStatsNew";
import { View } from "@acme/app/design/view";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <View className="w-full p-4 lg:w-6/12 xl:w-3/12">
        <Stack.Screen options={{ title: "Components Index" }} />
        <CardStats />
      </View>
    </>
  );
}
