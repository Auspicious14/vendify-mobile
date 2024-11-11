import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AppContextProvider } from "@/context";
import FlashMessage from "react-native-flash-message";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    OpenSansRegular: require("../assets/fonts/open-sans/OpenSans-Regular.ttf"),
    OpenSansBold: require("../assets/fonts/open-sans/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  console.log(loaded, "loadeddd");
  if (!loaded) {
    return null;
  }

  return (
    <AppContextProvider>
      <ThemeProvider value={DefaultTheme}>
        <FlashMessage position="top" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </AppContextProvider>
  );
}
