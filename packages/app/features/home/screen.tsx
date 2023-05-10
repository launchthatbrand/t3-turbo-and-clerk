import React from "react";

import { Link } from "solito/link";
import { Button, TouchableOpacity } from "../../design/button";
import { Text } from "../../design/typography";
import { View, SafeAreaView } from "../../design/view";

import type { AppRouter } from "@acme/api";
import type { inferProcedureOutput } from "@trpc/server";

import { trpc } from "../../utils/trpc";
import { FlashList } from "@shopify/flash-list";

const PostCard: React.FC<{
  post: inferProcedureOutput<AppRouter["post"]["all"]>[number];
}> = ({ post }) => {
  return (
    <View className="rounded-lg border-2 border-gray-500 p-4">
      <Text className="text-xl font-semibold text-[#cc66ff]">
        {post.post_title}
      </Text>
      <Text className="text-white">{post.post_content}</Text>
    </View>
  );
};

export function HomeScreen() {
  const { data: postData, isLoading, error } = trpc.post.all.useQuery();
  const [showPost, setShowPost] = React.useState<string | null>(null);
  return (
    <SafeAreaView className="h-full flex-1 flex-col justify-center bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Create <Text className="text-[#cc66ff]">T4</Text> Turbo
        </Text>

        <View className="py-2">
          {showPost ? (
            <Text className="text-white">
              <Text className="font-semibold">Selected post:</Text>
              {showPost}
            </Text>
          ) : (
            <Text className="font-semibold italic text-white">
              Press on a post
            </Text>
          )}
        </View>

        <FlashList
          data={postData}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <TouchableOpacity onPress={() => setShowPost(p.item.title)}>
              <PostCard
                post={p.item}
                /* onDelete={() => deletePostMutation.mutate(p.item.id)} */
              />
            </TouchableOpacity>
          )}
        />
        <Link href="/solito">
          <View className="rounded-lg border-2 border-gray-500 bg-slate-400 p-4">
            <Button disabled title="Go Solito" />
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
}
