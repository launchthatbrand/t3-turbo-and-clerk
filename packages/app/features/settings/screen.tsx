import { Link } from "solito/link";
import { Button } from "../../design/button";
import { Text } from "../../design/typography";
import { View } from "../../design/view";

import { CardSettings } from "../../design/components/Cards/CardSettings";
import CardProfile from "../../design/components/CardsOld/CardProfile.js";

export function SettingsScreen() {
  return (
    <View className="flex flex-row flex-wrap">
      <View className="w-full px-4 lg:w-8/12">
        <CardSettings />
      </View>
      <View className="w-full px-4 lg:w-4/12">
        <CardProfile />
      </View>
    </View>
  );
}
