import { Link } from "solito/link";
import { Button } from "../../design/button";
import { Text } from "../../design/typography";
import { View } from "../../design/view";
import MainLayout from "../../layouts/MainLayout";

export function SolitoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mx-auto pb-2 text-5xl font-bold text-white">
        Solito Screens
      </Text>
      <Link href="/">
        <View className="rounded-lg border-2 border-gray-500 bg-slate-400 p-4">
          <Button disabled title="Go Home" />
        </View>
      </Link>
    </View>
  );
}

/* SolitoScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
}; */
