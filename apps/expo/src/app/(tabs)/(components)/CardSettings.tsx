import { CardSettings } from "@acme/app/design/components/Cards/CardSettings";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "CardSettings" }} />
      <CardSettings />
    </>
  );
}
