import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../../features/home/screen";
import { SolitoScreen } from "../../features/solito/screen";
//import { UserDetailScreen } from '../../features/user/detail-screen'

const Stack = createNativeStackNavigator<{
  home: undefined;
  solito: undefined;
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="solito"
        component={SolitoScreen}
        options={{
          title: "Solito",
        }}
      />
    </Stack.Navigator>
  );
}
