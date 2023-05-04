import { LandingScreen as FeatureLandingScreen } from "@acme/app/features/landing/screen";
import FrontendLayout from "@acme/app/layouts/FrontendLayout";
export default function HomeScreen() {
  return <FeatureLandingScreen />;
}

HomeScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <FrontendLayout>{page}</FrontendLayout>;
};
