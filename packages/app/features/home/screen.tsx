import React from "react";

import { Link } from "solito/link";
import { Button, TouchableOpacity } from "../../design/button";
import { Text, TextInput } from "../../design/typography";
import { View, SafeAreaView } from "../../design/view";

import type { AppRouter } from "@acme/api";
import type { inferProcedureOutput } from "@trpc/server";

import { trpc } from "../../utils/trpc";
import { FlashList } from "@shopify/flash-list";

/* const PostCard: React.FC<{
  post: inferProcedureOutput<AppRouter["post"]["all"]>[number];
}> = ({ post }) => {
  return (
    <View className="rounded-lg border-2 border-gray-500 p-4">
      <Text className="text-xl font-semibold text-[#cc66ff]">asdasd</Text>
      <Text className="text-white">{post.content}</Text>
    </View>
  );
}; */

/* const CreatePost: React.FC = () => {
  const utils = trpc.useContext();
  const { mutate } = trpc.post.create.useMutation({
    async onSuccess() {
      await utils.post.all.invalidate();
    },
  });

  const [title, onChangeTitle] = React.useState("");
  const [content, onChangeContent] = React.useState("");

  return (
    <View className="flex flex-col border-t-2 border-gray-500 p-4">
      <TextInput
        className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
        onChangeText={onChangeTitle}
        placeholder="Title"
      />
      <TextInput
        className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
        onChangeText={onChangeContent}
        placeholder="Content"
      />
      <TouchableOpacity
        className="rounded bg-[#cc66ff] p-2"
        onPress={() => {
          mutate({
            title,
            content,
          });
        }}
      >
        <Text className="font-semibold text-white">Publish post</Text>
      </TouchableOpacity>
    </View>
  );
}; */

export function HomeScreen() {
  const { data, isLoading, error } = trpc.post.all.useQuery();
  const [showPost, setShowPost] = React.useState<string | null>(null);
  return (
    <SafeAreaView className="flex h-screen flex-col bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Create <Text className="text-[#cc66ff]">T3</Text> Turbo
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

        {/* <FlashList
          data={postQuery.data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <TouchableOpacity onPress={() => setShowPost(p.item.id)}>
              <PostCard post={p.item} />
            </TouchableOpacity>
          )}
        />

        <CreatePost /> */}
        {data?.map((entry) => (
          <View key={entry.id}>
            <Text>{entry.id}</Text>
          </View>
        ))}

        <Link href="/solito">
          <View className="rounded-lg border-2 border-gray-500 bg-slate-400 p-4">
            <Button disabled title="Go Solito" />
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
}
