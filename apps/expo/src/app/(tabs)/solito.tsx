import { SolitoScreen } from "@acme/app/features/solito/screen";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Solito Page" }} />
      <SolitoScreen />
    </>
  );
}
