import { ComponentsScreen } from "@acme/app/features/components/screen";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Components Page" }} />
      <ComponentsScreen />
    </>
  );
}
