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
      "https://player.vimeo.com/progressive_redirect/playback/182134344/container/add882d2-4961-4fce-8255-96eaec2006d8/cffd32b2?expires=1683670025&loc=external&signature=91ac0596585a2535ded03a2db118f8789ad3361635900b6bbc662b5d25de8039",
  },
  {
    id: "160573172",
    title: "Risk Management 101",
    videoUri:
      "https://player.vimeo.com/progressive_redirect/playback/160573172/container/3ef064ad-1725-48b8-b19f-105bae732687/785909ac?expires=1683669915&loc=external&signature=0cda37086224ed5589ccb462d04d384635811ce4a7fd8ab9a112241cad4caf3b",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    videoUri:
      "https://player.vimeo.com/progressive_redirect/playback/245642592/container/44089a6a-d6ff-4554-9102-cbe1fe3ec431/631a9fb5?expires=1683670101&loc=external&signature=49d374fbfadab46f00643f0d0554bedb383ff5b77f12caf477d84c293cc3f70f",
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
