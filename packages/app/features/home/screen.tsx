import { TextLink } from "solito/link";
import { View } from "../../design/view";
import { Button } from "../../design/button";
import { Text } from "../../design/typography";
import { FlashList } from "@shopify/flash-list";
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from "../../design/layout";

const SignOut = () => {
  const { signOut } = useAuth();
  return (
    <View className="rounded-lg border-2 border-gray-500 p-4">
      <Button
        title="Sign Outs"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export function HomeScreen() {
  return (
    <SafeAreaView className="bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Create <Text className="text-[#cc66ff]">T3</Text> Turbo
        </Text>

        <View className="py-2"></View>

        {/* <FlashList
          data={postQuery.data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <TouchableOpacity onPress={() => setShowPost(p.item.id)}>
              <PostCard post={p.item} />
            </TouchableOpacity>
          )}
        /> */}

        {/* <CreatePost /> */}
        <SignOut />
        <TextLink href="/solito">Regular Link</TextLink>
      </View>
    </SafeAreaView>
  );
}
