import { View } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as ReactNativeSafeAreaView } from "react-native-safe-area-context";

export const Row = styled(View, "flex-row");
export const SafeAreaView = styled(ReactNativeSafeAreaView);
