import { CourseScreen } from "@acme/app/features/course/screen";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Course" }} />
      <CourseScreen />
    </>
  );
}
