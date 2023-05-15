/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Text } from "../../../design/typography";
import { View } from "../../../design/view";
import { Dimensions, StyleSheet } from "react-native";

import { Video, ResizeMode } from "expo-av";
import { Button, TouchableOpacity } from "../../button";

const DATA: Item[] = [
  {
    id: "182134344",
    title: "TradingView 101 By : Nick FitzGerald",
    videoUri:
      "https://player.vimeo.com/progressive_redirect/playback/182134344/rendition/720p/file.mp4?loc=external&signature=ec882b10dd63e24f247c4dfcb4acbb9d5b4772829a1b506c6e766c40af454655",
  },
  {
    id: "160573172",
    title: "Risk Management 101",
    videoUri:
      "https://player.vimeo.com/progressive_redirect/playback/160573172/rendition/720p/file.mp4?loc=external&signature=c0b4507330ec354b79e77cacf8acba3e8ff3a19df74727e9a60fd51833ae3d84",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "MT4 WALK THROUGH",
    videoUri:
      "https://player.vimeo.com/progressive_redirect/playback/245642592/rendition/720p/file.mp4?loc=external&signature=fbea621830ed8b1f540494bd70702b7f88af0f5ce5e9a611bbce615ebb9fb9fb",
  },
];

type Item = {
  id: string;
  title: string;
  videoUri: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export function CourseComponent() {
  const video = React.useRef(null);
  const [currentItem, setCurrentItem] = React.useState<Item>();

  const ListHeader = () => {
    //View to set in Header
    return (
      <>
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
        <Text>{currentItem?.id}</Text>
      </>
    );
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === currentItem?.id ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === currentItem?.id ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setCurrentItem(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <>
      <FlashList
        data={DATA}
        ListHeaderComponent={ListHeader}
        renderItem={renderItem}
        estimatedItemSize={5}
      />
    </>
  );
}

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
