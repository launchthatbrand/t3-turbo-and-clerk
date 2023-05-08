import { CourseComponent } from "@acme/app/design/components/Course/CourseComponent";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "First Component" }} />
      <CourseComponent />
    </>
  );
}
