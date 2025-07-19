import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.GALAXY_BLACK,
        },
        headerTintColor: Colors.TATOOINE_SAND,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "All Films" }} />
      <Stack.Screen name="[filmId]" options={{ title: "Film Details" }} />
    </Stack>
  );
}
