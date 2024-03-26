import { Stack, router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text, StyleSheet, Image, View } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

import { ScreenHeaderBtn } from "../../../components";
import { DrawerToggleButton } from "@react-navigation/drawer";

function LogoTitle() {
  return (
    <Image
      source={require("../../../assets/images/crown-home-logo.png")}
      style={{
        width: 60,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 4,
      }}
    />
  );
}

const handleNotificationsPress = () => {
  router.push("home/notifications");
};

const handleChatInfoPress = () => {
  router.push("home/chat-information");
};

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: { backgroundColor: COLORS.darkBackground },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconName="notifications-outline"
              handlePress={handleNotificationsPress}
            />
          ),
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <ScreenHeaderBtn
              iconName="add-circle-outline"
              handlePress={() => {}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="chat/[id]"
        options={{
          headerStyle: { backgroundColor: COLORS.darkDetailsBackground },
          headerShadowVisible: false,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontFamily: FONT.discoverHeader,
            fontSize: SIZES.xLarge,
          },
          headerTintColor: COLORS.lightWhite,
        }}
      />
      <Stack.Screen
        name="notifications/index"
        options={{
          headerStyle: { backgroundColor: COLORS.darkBackground },
          headerShadowVisible: false,
          headerTitle: "Notifications",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontFamily: FONT.bold,
            fontSize: SIZES.large,
          },
          headerTintColor: COLORS.lightWhite,
          headerRight: () => (
            <ScreenHeaderBtn
              iconName={"settings-sharp"}
              handlePress={() => {}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="chat-information/index"
        options={{
          headerStyle: { backgroundColor: COLORS.darkBackground },
          headerShadowVisible: false,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontFamily: FONT.bold,
            fontSize: SIZES.large,
          },
          headerTintColor: COLORS.lightWhite,
        }}
      />
      <Stack.Screen
        name="create-a-vote-modal/index"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default StackLayout;

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
  },
});
