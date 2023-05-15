import React from "react";
import Link from "next/link";
import { View } from "../../view";
import { Text, TextInput } from "../../typography";
import { Button, TouchableOpacity } from "../../button";
import { Image } from "../../image";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  emailAddress: string;
  password: string;
  rememberMe: boolean;
};

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });
  const onSubmit = (data: unknown) => console.log(data);
  return (
    <>
      <View className="container mx-auto h-full px-4">
        <View className="flex h-full content-center items-center justify-center">
          <View className="w-full px-4 lg:w-4/12">
            <View className="bg-blueGray-200 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 shadow-lg">
              <View className="mb-0 rounded-t px-6 py-6">
                <Text className="text-blueGray-500 mb-3 text-center text-sm font-bold">
                  Sign in with
                </Text>
                <View className="btn-wrapper flex-row justify-center text-center">
                  <TouchableOpacity className="active:bg-blueGray-50 text-blueGray-700 mb-1 mr-2 inline-flex flex-row items-center rounded bg-white px-4 py-2 font-normal uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none">
                    <Image
                      alt="..."
                      className="mr-1 h-6 w-5 w-6"
                      source={{
                        uri: "/img/github.svg",
                      }}
                    />
                    <Text className="text-xs font-bold">Github</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="active:bg-blueGray-50 text-blueGray-700 mb-1 mr-1 inline-flex flex-row items-center rounded bg-white px-4 py-2 text-xs font-bold font-normal uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none">
                    <Image
                      alt="..."
                      className="mr-1 h-6 w-5 w-6"
                      source={{
                        uri: "/img/github.svg",
                      }}
                    />
                    <Text className="text-xs font-bold">Google</Text>
                  </TouchableOpacity>
                </View>
                <View className="border-b-1 mt-6 border-slate-400" />
              </View>
              <View className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <Text className="text-blueGray-400 mb-3 text-center font-bold">
                  Or sign in with credentials
                </Text>
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
                    name="emailAddress"
                  />
                </View>

                <View className="relative mb-3 w-full">
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <>
                        <Text className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                          Password
                        </Text>
                        <TextInput
                          className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                          placeholder="Password"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      </>
                    )}
                    name="password"
                  />
                </View>

                <View className="mt-6 text-center">
                  <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    activeOpacity={1}
                    className="active:bg-blueGray-600 bg-blueGray-800 mb-1 mr-1 w-full rounded px-6 py-3 uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                  >
                    <Text className="text-center text-sm font-bold text-white">
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* <View className="relative mt-6 flex flex-wrap">
              <View className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <Text>Forgot password?</Text>
                </a>
              </View>
              <View className="w-1/2 text-right">
                <Link href="/auth/register">
                  <a href="#pablo" className="text-blueGray-200">
                    <Text>Create new account</Text>
                  </a>
                </Link>
              </View>
            </View> */}
          </View>
        </View>
      </View>
    </>
  );
}
