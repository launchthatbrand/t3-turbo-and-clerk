import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";

interface PlaybackStatus {
  isPlaying: boolean;
  // Other properties of the playback status
}

export function VideoScreen() {
  const video = React.useRef<Video | null>(null);
  const [status, setStatus] = React.useState<PlaybackStatus>(
    {} as PlaybackStatus,
  );

  const handlePlaybackStatusUpdate = (newStatus: AVPlaybackStatus) => {
    setStatus(newStatus as PlaybackStatus);
  };

  const handlePlayPause = async () => {
    if (video.current) {
      if (status.isPlaying) {
        await video.current.pauseAsync();
      } else {
        await video.current.playAsync();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={handlePlayPause}
        />
      </View>
    </View>
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
