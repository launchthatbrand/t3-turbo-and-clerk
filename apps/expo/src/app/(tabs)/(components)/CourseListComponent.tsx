import { CourseListComponent } from "@acme/app/design/components/Course/CourseListComponent";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "First Component" }} />
      <CourseListComponent />
    </>
  );
}
