import { Link } from "solito/link";
import { Button } from "../../design/button";
import { Text } from "../../design/typography";
import { View } from "../../design/view";
import { CourseComponent } from "../../design/components/Course/CourseComponentProps";

export function CourseScreen() {
  const data = [
    {
      ID: BigInt(1),
      post_title: "Overrride Post Title 1",
    },
    {
      ID: BigInt(2),
      post_title: "Overrride Post Title 2",
    },
  ];
  return (
    <View className="bg-blueGray-600 flex flex-row flex-wrap">
      <CourseComponent data={data} />
    </View>
  );
}

/* SolitoScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
}; */
