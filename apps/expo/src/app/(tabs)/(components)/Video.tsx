import { VideoScreen } from "@acme/app/features/video/screen";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "First Component" }} />
      <VideoScreen />
    </>
  );
}
