import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SolitoScreen } from "../../features/solito/screen";

const Stack = createNativeStackNavigator<{
  home: undefined;
  "user-detail": {
    id: string;
  };
  solito: undefined;
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator>
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
