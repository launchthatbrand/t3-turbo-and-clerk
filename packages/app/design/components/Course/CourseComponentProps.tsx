import React, { useState, useRef, FC } from "react";
import { FlatList, ListRenderItem } from "react-native";

import { Text } from "../../../design/typography";
import { View } from "../../../design/view";

import { TouchableOpacity } from "../../button";
import { FlashList } from "@shopify/flash-list";

interface CourseComponentProps {
  data?: DataItem[];
}

type DataItem = {
  ID: bigint;
  post_title: string;
};

type ItemProps = {
  item: DataItem;
};

const Item = ({ item }: ItemProps) => (
  <TouchableOpacity>
    <Text>{item.post_title}</Text>
  </TouchableOpacity>
);

export const CourseComponent: FC<CourseComponentProps> = ({ data }) => {
  const renderItem = ({ item }: { item: DataItem }) => {
    return <Item item={item} />;
  };

  return (
    <FlashList
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
