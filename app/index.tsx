import { Redirect } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react-native";

import { AuthHeader, authTheme } from "../components";
import { COLORS } from "../constants";
Amplify.configure(config);

SplashScreen.preventAutoHideAsync();

const index = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    BNRegular: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const myTheme = authTheme;

  return (
    <ThemeProvider theme={myTheme}>
      <Authenticator.Provider>
        <Authenticator Header={AuthHeader}>
          <Redirect href="/home" />
        </Authenticator>
      </Authenticator.Provider>
    </ThemeProvider>
  );
};

export default index;
