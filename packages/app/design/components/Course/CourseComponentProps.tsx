import React, { useState, useRef, FC } from "react";
import { FlatList, ListRenderItem } from "react-native";

import { Text } from "../../../design/typography";
import { View } from "../../../design/view";

import { type RouterOutputs } from "../../../utils/trpc";

interface CourseComponentProps {
  data?: DataItem[];
}

type DataItem = {
  ID: bigint;
  post_title: string;
};

export const CourseComponent: FC<CourseComponentProps> = ({ data }) => {
  const renderItem: ListRenderItem<DataItem> = ({ item }) => {
    return (
      <View>
        <Text>{item.post_title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.ID.toString()}
    />
  );
};

CourseComponent.defaultProps = {
  data: [
    {
      ID: BigInt(1),
      post_title: "Default Post Title 1",
    },
    {
      ID: BigInt(2),
      post_title: "Default Post Title 2",
    },
  ],
};
