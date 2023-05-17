import { SettingsScreen as FeatureSettingsScreen } from "@acme/app/features/settings/screen";
import MainLayout from "@acme/app/layouts/MainLayout";
export default function SettingsScreen() {
  return <FeatureSettingsScreen />;
}

SettingsScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
