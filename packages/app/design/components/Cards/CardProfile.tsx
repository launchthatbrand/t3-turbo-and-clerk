import { Text, H6, TextInput, TextLink } from "../../../design/typography";
import { SafeAreaView, ScrollView, View } from "../../../design/view";
import { Button, TouchableOpacity } from "../../../design/button";

import { useForm, Controller } from "react-hook-form";
import { Image } from "../../image";

type FormData = {
  userName: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postCode: string;
  aboutMe: string;
};

export function CardProfile() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      userName: "",
      emailAddress: "",
    },
  });
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <View className="bg-blueGray-100 relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg shadow-xl">
      <View className="px-6">
        <View className="flex flex-wrap justify-center	">
          <View className="flex w-full items-center px-4	">
            <View className="relative justify-center">
              <Image
                alt="..."
                className="-mt-16 h-[150px] w-[150px] rounded-full align-middle shadow-xl"
                source={{
                  uri: "/img/team-2-800x800.jpg",
                }}
              />
            </View>
          </View>
          <View className="mt-10 w-full px-4 text-center">
            <View className="flex-row justify-center gap-1 py-4 pt-8 lg:pt-4">
              <View className="w-20 p-1 text-center">
                <Text className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                  22
                </Text>
                <Text className="text-blueGray-400 text-sm">Friends</Text>
              </View>
              <View className="w-20 p-1 text-center">
                <Text className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                  10
                </Text>
                <Text className="text-blueGray-400 text-sm">Photos</Text>
              </View>
              <View className="w-20 p-1 text-center">
                <Text className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                  89
                </Text>
                <Text className="text-blueGray-400 text-sm">Comments</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-12 text-center">
          <Text className="text-blueGray-700 mb-2 mb-2 text-xl font-semibold leading-normal">
            Jenna Stones
          </Text>
          <View className="text-blueGray-400 mb-2 mt-0 text-sm font-bold uppercase leading-normal">
            {/* <i className="fas fa-map-marker-alt text-blueGray-400 mr-2 text-lg"></i>{" "} */}
            <Text>Los Angeles, California</Text>
          </View>
          <View className="text-blueGray-600 mb-2 mt-10">
            {/* <i className="fas fa-briefcase text-blueGray-400 mr-2 text-lg"></i> */}
            <Text>Solution Manager - Creative Tim Officer</Text>
          </View>
          <View className="text-blueGray-600 mb-2">
            {/* <i className="fas fa-university text-blueGray-400 mr-2 text-lg"></i> */}
            <Text>University of Computer Science</Text>
          </View>
        </View>
        <View className="border-blueGray-200 mt-10 border-t py-10 text-center">
          <View className="flex flex-wrap justify-center">
            <View className="w-full px-4 ">
              <Text className="text-blueGray-700 mb-4 text-lg leading-relaxed">
                An artist of considerable range, Jenna the name taken by
                Melbourne-raised, Brooklyn-based Nick MurTexthy writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </Text>
              <TextLink
                href="#pablo"
                className="text-lightBlue-500 font-normal"
                onClick={(e) => e.preventDefault()}
              >
                Show more
              </TextLink>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
