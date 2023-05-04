import { Text, H6, TextInput } from "../../../design/typography";
import { View } from "../../../design/view";
import { Button, TouchableOpacity } from "../../../design/button";
import { SignedIn, SignedOut, useAuth } from "../../../utils/clerk";

import { useForm, Controller } from "react-hook-form";

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

export function CardSettings() {
  const { signOut, userId } = useAuth();
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
    <View className="bg-blueGray-100 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 shadow-lg">
      <View className="mb-0 rounded-t  px-6 py-6">
        <View className="flex flex-row justify-between text-center align-middle">
          <Text className="text-blueGray-700 align-middle text-xl font-bold">
            My account
          </Text>
          <TouchableOpacity
            onPress={() => {
              signOut();
            }}
            activeOpacity={1}
            className="active:bg-blueGray-600 bg-blueGray-700 mr-1 rounded px-4 py-2 shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none"
          >
            <Text className="p-0 text-xs font-bold uppercase text-white">
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-auto px-4 py-10 pt-0 lg:px-10">
        <Text className="text-blueGray-400 mb-6 mt-3 text-sm font-bold uppercase">
          User Information
        </Text>
        <View className="flex flex-row flex-wrap">
          <View className="w-full px-4 lg:w-6/12">
            <View className="relative mb-3 w-full">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Username
                    </Text>
                    <TextInput
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Username"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
                name="userName"
              />
            </View>
          </View>
          <View className="w-full px-4 lg:w-6/12">
            <View className="relative mb-3 w-full">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Email
                    </Text>
                    <TextInput
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Email"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
                name="emailAddress"
              />
            </View>
          </View>
          <View className="w-full px-4 lg:w-6/12">
            <View className="relative mb-3 w-full">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      First Name
                    </Text>
                    <TextInput
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="First Name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
                name="firstName"
              />
            </View>
          </View>
          <View className="w-full px-4 lg:w-6/12">
            <View className="relative mb-3 w-full">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Last Name
                    </Text>
                    <TextInput
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Last Name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
                name="lastName"
              />
            </View>
          </View>
          <View className="border-b-1 border-blueGray-300 mt-6 w-full" />
        </View>
        <Text className="text-blueGray-400 mb-6 mt-3 text-sm font-bold uppercase">
          Contact Information
        </Text>
        <View className="flex flex-row flex-wrap">
          <View className="lg:w-12/12 w-full px-4">
            <View className="relative mb-3 w-full">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Address
                    </Text>
                    <TextInput
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Address"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
                name="address"
              />
            </View>
          </View>
          <View className="w-full px-4 lg:w-4/12">
            <View className="relative mb-3 w-full">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      City
                    </Text>
                    <TextInput
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="City"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
                name="city"
              />
            </View>
          </View>
          <View className="w-full px-4 lg:w-4/12">
            <View className="relative mb-3 w-full">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Country
                    </Text>
                    <TextInput
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Country"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
                name="country"
              />
            </View>
          </View>
          <View className="w-full px-4 lg:w-4/12">
            <View className="relative mb-3 w-full">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Post Code
                    </Text>
                    <TextInput
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Post Code"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
                name="postCode"
              />
            </View>
          </View>
          <View className="border-b-1 border-blueGray-300 mt-6 w-full" />
        </View>
        <Text className="text-blueGray-400 mb-6 mt-3 text-sm font-bold uppercase">
          About Me
        </Text>
        <View className="lg:w-12/12 w-full px-4">
          <View className="relative mb-3 w-full">
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <Text className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                    About Me
                  </Text>
                  <TextInput
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    placeholder="About Me"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </>
              )}
              name="aboutMe"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          activeOpacity={1}
          className="active:bg-blueGray-600 bg-blueGray-800 mb-1 mr-1 w-full rounded px-6 py-3 uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
        >
          <Text className="text-center text-sm font-bold text-white">Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
