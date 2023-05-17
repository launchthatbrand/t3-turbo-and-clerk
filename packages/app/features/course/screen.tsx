import { View } from "../../design/view";
import { CourseComponent } from "../../design/components/Course/CourseComponent";
import { trpc } from "../../utils/trpc";

export function CourseScreen() {
  const { data: postData, isLoading, error } = trpc.post.all.useQuery();
  const data = [
    {
      ID: BigInt(1),
      post_title: "TradingView 101 By : Nick FitzGerald",
      videoUri:
        "https://player.vimeo.com/progressive_redirect/playback/182134344/rendition/720p/file.mp4?loc=external&signature=ec882b10dd63e24f247c4dfcb4acbb9d5b4772829a1b506c6e766c40af454655",
    },
    {
      ID: BigInt(2),
      post_title: "Risk Management 101",
      videoUri:
        "https://player.vimeo.com/progressive_redirect/playback/160573172/rendition/720p/file.mp4?loc=external&signature=c0b4507330ec354b79e77cacf8acba3e8ff3a19df74727e9a60fd51833ae3d84",
    },
    {
      ID: BigInt(3),
      post_title: "MT4 WALK THROUGH",
      videoUri:
        "https://player.vimeo.com/progressive_redirect/playback/245642592/rendition/720p/file.mp4?loc=external&signature=fbea621830ed8b1f540494bd70702b7f88af0f5ce5e9a611bbce615ebb9fb9fb",
    },
  ];
  return (
    <View className="bg-blueGray-600 flex flex-row flex-wrap justify-center">
      <CourseComponent data={postData} />
    </View>
  );
}
