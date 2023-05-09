import { View } from "../../design/view";
import CardTable from "../../design/components/CardsOld/CardTable";

export function TablesScreen() {
  return (
    <View className="mt-4 flex flex-wrap">
      <View className="mb-12 w-full px-4">
        <CardTable />
      </View>
      <View className="mb-12 w-full px-4">
        <CardTable color="dark" />
      </View>
    </View>
  );
}
