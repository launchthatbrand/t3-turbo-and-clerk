import { Text } from "../../../design/typography";
import { View } from "../../../design/view";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useResizeColumns,
  useFlexLayout,
} from "react-table";

export function CardTable() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mx-auto pb-2 text-5xl font-bold text-white">
        Card Table
      </Text>
    </View>
  );
}
