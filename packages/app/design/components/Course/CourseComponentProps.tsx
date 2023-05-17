import React, { useState, useRef, FC } from "react";
import { FlatList } from "react-native";

import { Text } from "../../../design/typography";
import { View } from "../../../design/view";

import { type RouterOutputs } from "../../../utils/trpc";

interface CourseComponentProps {
  data?: ArrayLike<RouterOutputs["post"]["all"][0]>; // Type based on TRPC's RouterOutputs
}

export const CourseComponent: FC<CourseComponentProps> = ({ data }) => {
  const renderItem = ({
    item,
  }: {
    item: RouterOutputs["post"]["all"][number];
  }) => (
    <View>
      <Text>{item.post_title}</Text>
      {/* Render other properties as needed */}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.ID.toString()}
    />
  );
};

/* CourseComponent.defaultProps = {
  data: [
    {
      ID: 1,
      post_title: "Default Post Title 1",
    },
    {
      ID: 2,
      post_title: "Default Post Title 2",
    },
  ],
}; */
