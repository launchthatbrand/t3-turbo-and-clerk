import { FirstComponent } from "@acme/app/design/components/FirstComponent";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "First Component" }} />
      <FirstComponent />
    </>
  );
}
