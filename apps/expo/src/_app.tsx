import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/trpc";

import { HomeScreen } from "./screens/home";
import { SignInSignUpScreen } from "./screens/signin";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { tokenCache } from "./utils/cache";
import Constants from "expo-constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NativeNavigation } from "@acme/app/navigation/native";
import { Provider } from "@acme/app/provider";

const Stack = createNativeStackNavigator<{
  home: undefined;
  solito: undefined;
}>();

export const App = () => {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <SignedIn>
        <TRPCProvider>
          <Provider>
            <SafeAreaProvider>
              <NativeNavigation />
              <StatusBar />
            </SafeAreaProvider>
          </Provider>
        </TRPCProvider>
      </SignedIn>
      <SignedOut>
        <SignInSignUpScreen />
      </SignedOut>
    </ClerkProvider>
  );
};
