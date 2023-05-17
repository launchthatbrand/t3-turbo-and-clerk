import { Link } from "solito/link";
import { Button } from "../../design/button";
import { Text } from "../../design/typography";
import { View } from "../../design/view";
import { CourseComponent } from "../../design/components/Course/CourseComponentProps";

export function CourseScreen() {
  return (
    <View className="bg-blueGray-600 flex flex-row flex-wrap">
      <CourseComponent />
    </View>
  );
}

/* SolitoScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
}; */
