import { SettingsScreen } from "@acme/app/features/settings/screen";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Settings Page" }} />
      <SettingsScreen />
    </>
  );
}
