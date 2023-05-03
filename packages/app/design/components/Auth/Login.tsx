import React from "react";
import Link from "next/link";
import { View } from "../../view";
import { Text } from "../../typography";
import { Button } from "../../button";
import { Image } from "../../image";

export default function Login() {
  return (
    <>
      <View className="container mx-auto h-full px-4">
        <View className="flex h-full content-center items-center justify-center">
          <View className="w-full px-4 lg:w-4/12">
            <View className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white shadow-lg">
              <View className="mb-0 rounded-t px-6 py-6">
                <Text className="text-blueGray-500 mb-3 text-center text-sm font-bold">
                  Sign in with
                </Text>
                <View className="btn-wrapper flex-row justify-center text-center">
                  <View className="active:bg-blueGray-50 text-blueGray-700 mb-1 mr-2 inline-flex flex-row items-center rounded bg-white px-4 py-2 font-normal uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none">
                    <Image
                      alt="..."
                      className="mr-1 h-6 w-5 w-6"
                      source={{
                        uri: "/img/github.svg",
                      }}
                    />
                    <Button
                      title="Github"
                      className="text-xs font-bold"
                    ></Button>
                  </View>
                  <View className="active:bg-blueGray-50 text-blueGray-700 mb-1 mr-1 inline-flex flex-row items-center rounded bg-white px-4 py-2 text-xs font-bold font-normal uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none">
                    <Image
                      alt="..."
                      className="mr-1 h-6 w-5 w-6"
                      source={{
                        uri: "/img/github.svg",
                      }}
                    />
                    <Button title="Google"></Button>
                  </View>
                </View>
                <View className="border-blueGray-300 mt-6 border-b-2" />
              </View>
              <View className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <Text className="text-blueGray-400 mb-3 text-center font-bold">
                  Or sign in with credentials
                </Text>

                {/* <form>
                  <View className="relative mb-3 w-full">
                    <label
                      className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Email"
                    />
                  </View>

                  <View className="relative mb-3 w-full">
                    <label
                      className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Password"
                    />
                  </View>
                  <View>
                    <label className="inline-flex cursor-pointer items-center">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox text-blueGray-700 ml-1 h-5 w-5 rounded border-0 transition-all duration-150 ease-linear"
                      />
                      <span className="text-blueGray-600 ml-2 text-sm font-semibold">
                        Remember me
                      </span>
                    </label>
                  </View>

                  <View className="mt-6 text-center">
                    <Button
                      className="bg-blueGray-800 active:bg-blueGray-600 mb-1 mr-1 w-full rounded px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                      type="Button"
                    >
                      Sign In
                    </Button>
                  </View>
                </form> */}
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
