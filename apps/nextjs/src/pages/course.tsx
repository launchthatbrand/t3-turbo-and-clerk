import { CourseScreen as FeatureCourseScreen } from "@acme/app/features/course/screen";

import MainLayout from "@acme/app/layouts/MainLayout";
export default function CourseScreen() {
  return <FeatureCourseScreen />;
}

CourseScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
