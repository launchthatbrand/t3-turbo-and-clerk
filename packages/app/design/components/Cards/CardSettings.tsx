import { Text, H6 } from "../../../design/typography";
import { View } from "../../../design/view";
import { Button } from "../../../design/button";

export function CardSettings() {
  return (
    <View className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-[#2e026d] shadow-lg">
      <View className="mb-0 rounded-t bg-white px-6 py-6">
        <View className="flex justify-between text-center">
          <H6 className="text-blueGray-700 text-xl font-bold">My account</H6>
          <View className="active:bg-blueGray-600 mr-1 rounded bg-[#2e026d] px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none">
            <Button title="Settings"></Button>
          </View>
        </View>
      </View>
      <View className="flex-auto px-4 py-10 pt-0 lg:px-10"></View>
    </View>
  );
}
