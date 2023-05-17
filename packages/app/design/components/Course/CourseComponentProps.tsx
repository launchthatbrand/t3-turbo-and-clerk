import React, { useState, useRef, FC } from "react";
import { StyleSheet } from "react-native";

import { Text } from "../../../design/typography";
import { View } from "../../../design/view";

import { TouchableOpacity } from "../../button";
import { FlashList } from "@shopify/flash-list";
import { Video, ResizeMode } from "expo-av";

interface CourseComponentProps {
  data?: DataItem[];
}

type DataItem = {
  ID: bigint;
  post_title: string;
  videoUri: string;
};

type ItemProps = {
  item: DataItem;
  onPress: () => void;
};

const Item = ({ item, onPress }: ItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.post_title}</Text>
  </TouchableOpacity>
);

export const CourseComponent: FC<CourseComponentProps> = ({ data }) => {
  const video = React.useRef(null);
  const [currentItem, setCurrentItem] = React.useState<DataItem>();

  const renderItem = ({ item }: { item: DataItem }) => {
    return <Item item={item} onPress={() => setCurrentItem(item)} />;
  };

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: currentItem?.videoUri,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
      <Text>{currentItem?.post_title}</Text>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID.toString()}
      />
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
