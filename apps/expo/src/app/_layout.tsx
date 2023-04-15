import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "../utils/trpc";
import { SignInSignUpScreen } from "../screens/signin";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { tokenCache } from "../utils/cache";
import Constants from "expo-constants";

import { Provider } from "@acme/app/provider";
import { Stack, Tabs } from "expo-router";
import { HomeScreen } from "@acme/app/features/home/screen";
import { SolitoScreen } from "@acme/app/features/solito/screen";

const RootLayout = () => {
  return (
    <Provider>
      <ClerkProvider
        publishableKey={
          Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY as string
        }
        tokenCache={tokenCache}
      >
        <SignedIn>
          <TRPCProvider>
            <SafeAreaProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
              <StatusBar />
            </SafeAreaProvider>
          </TRPCProvider>
        </SignedIn>
        <SignedOut>
          <SignInSignUpScreen />
        </SignedOut>
      </ClerkProvider>
    </Provider>
  );
};

export default RootLayout;
