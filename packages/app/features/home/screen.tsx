import React from "react";

import { Link } from "solito/link";
import { Button, TouchableOpacity } from "../../design/button";
import { Text, TextInput } from "../../design/typography";
import { View, SafeAreaView } from "../../design/view";

import type { AppRouter } from "@acme/api";
import type { inferProcedureOutput } from "@trpc/server";

import { trpc } from "../../utils/trpc";
import { FlashList } from "@shopify/flash-list";
import MainLayout from "../../layouts/MainLayout";

export function HomeScreen() {
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
      </View>
    </SafeAreaView>
  );
}
