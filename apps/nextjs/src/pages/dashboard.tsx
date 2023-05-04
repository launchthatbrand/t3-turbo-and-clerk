import { HomeScreen as FeatureHomeScreen } from "@acme/app/features/home/screen";
import MainLayout from "@acme/app/layouts/MainLayout";
export default function HomeScreen() {
  return <FeatureHomeScreen />;
}

HomeScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
