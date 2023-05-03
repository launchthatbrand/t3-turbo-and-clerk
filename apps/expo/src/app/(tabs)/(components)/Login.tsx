import Login from "@acme/app/design/components/Auth/Login";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "First Component" }} />
      <Login />
    </>
  );
}
