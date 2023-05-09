import { CardTable } from "@acme/app/design/components/Cards/CardTable";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "First Component" }} />
      <CardTable />
    </>
  );
}
