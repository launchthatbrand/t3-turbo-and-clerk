import { Link } from "solito/link";
import { Button } from "../../design/button";
import { Text } from "../../design/typography";
import { ScrollView, View } from "../../design/view";

import { CardSettings } from "../../design/components/Cards/CardSettings";
import { CardProfile } from "../../design/components/Cards/CardProfile";

export function SettingsScreen() {
  return (
    <ScrollView>
      <View className="flex flex-row flex-wrap">
        <View className="w-full p-4 lg:w-8/12">
          <CardSettings />
        </View>
        <View className="w-full px-4 lg:w-4/12">
          <CardProfile />
        </View>
      </View>
    </ScrollView>
  );
}
